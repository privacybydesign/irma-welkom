package main

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"errors"
	"strings"

	irma "github.com/privacybydesign/irmago"
	server "github.com/privacybydesign/irmago/server"
	"gopkg.in/yaml.v2"

	"database/sql"
	"encoding/gob"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"github.com/gorilla/securecookie"
	"github.com/gorilla/sessions"
	"github.com/segmentio/ksuid"
)

// Configuration
type Conf struct {
	// URL of the server
	Url string `yaml:"url"`

	// Address to bind to
	BindAddr string `yaml:"bindAddr"`

	// IRMA server url for email authentication
	IrmaServerURL string `yaml:"irmaServerURL"`

	// Database stuff
	DbDriver string `yaml:"db"`
	DbHost   string `yaml:"dbHost"`
	DbUser   string `yaml:"dbUser"`
	DbPass   string `yaml:"dbPass"`
	DbName   string `yaml:"dbName"`
}

type User struct {
	Email         string
	Authenticated bool
	Token         string // irma session token for the to-be-authenticated user
}

type Location struct {
	Id       string `json:"location_id"`
	Name     string `json:"name"`
	Location string `json:"location"`
}

var (
	// A standard configuration
	conf = Conf{
		Url:           "http://localhost:8080",
		IrmaServerURL: "http://localhost:8088",
		DbDriver:      "mysql",
		DbHost:        "localhost",
		DbUser:        "irmagast",
		DbPass:        "irmagast",
		DbName:        "test",
	}

	// The database
	db *sql.DB

	// Session storage
	store *sessions.CookieStore
)

func readConfig(confPath string) {
	if _, err := os.Stat(confPath); os.IsNotExist(err) {
		fmt.Printf("Error: could not find configuration file: %s\n\n", confPath)
		fmt.Printf("Example configuration file:\n\n")
		buf, _ := yaml.Marshal(&conf)
		fmt.Printf("%s\n", buf)
		return
	} else {
		buf, err := ioutil.ReadFile(confPath)
		if err != nil {
			log.Fatalf("Could not read %s: %v", confPath, err)
		}
		err = yaml.Unmarshal(buf, &conf)
		if err != nil {
			log.Fatalf("Could not parse config files: %v", err)
		}
	}
}

func initDatabase() {
	var err error
	db, err = sql.Open(conf.DbDriver, fmt.Sprintf("%s:%s@tcp(%s:3306)/%s", conf.DbUser, conf.DbPass, conf.DbHost, conf.DbName))
	if err != nil {
		log.Fatalf("Could not connect to the DB %v", err)
	}
	if err = db.Ping(); err != nil {
		log.Fatalf("Database could not be pinged: %v", err)
	}
}

func initSessionStorage() {
	authKeyOne := securecookie.GenerateRandomKey(64)
	encryptionKeyOne := securecookie.GenerateRandomKey(32)

	store = sessions.NewCookieStore(
		authKeyOne,
		encryptionKeyOne,
	)

	store.Options = &sessions.Options{
		MaxAge:   60 * 5,
		HttpOnly: true,
		SameSite: http.SameSiteStrictMode,
	}

	gob.Register(User{})
}

// Checks cookie for a current ongoing session
// if arg "authenticated" is true then it checks if the email is already authenticated
func checkCookie(w http.ResponseWriter, r *http.Request, userExists, userAuthenticated bool) (*User, error) {
	session, err := store.Get(r, "irmagast")
	if err != nil {
		http.Error(w, "No session", http.StatusForbidden)
		return nil, err
	}
	user, ok := session.Values["user"].(User)
	if !ok && userExists {
		http.Error(w, "No user", http.StatusForbidden)
		return nil, errors.New("No user found")
	}
	if !user.Authenticated && userAuthenticated {
		http.Error(w, "User not authenticated", http.StatusForbidden)
		return nil, errors.New("User not authenticated")
	}
	return &user, nil
}

// Authenticates a user and passes along through request.Context
func AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var ctx context.Context
		ctx = r.Context()

		userExists := !strings.HasSuffix(r.URL.Path, "login") && !strings.HasSuffix(r.URL.Path, "irmasession_start")
		userAuthenticated := !strings.HasSuffix(r.URL.Path, "login") && !strings.HasSuffix(r.URL.Path, "irmasession_start") && !strings.HasSuffix(r.URL.Path, "irmasession_finish")

		user, err := checkCookie(w, r, userExists, userAuthenticated)
		if err != nil {
			log.Printf("Authentication error: %v", err)
			return
		}

		ctx = context.WithValue(ctx, "user", user)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func getUser(ctx context.Context) *User {
	return ctx.Value("user").(*User)
}

func login(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "views/login.html")
}

func irmaSessionStart(w http.ResponseWriter, r *http.Request) {
	log.Println("Starting email authentication")
	w.Header().Add("Cache-Control", "no-store") // Do not cache the response

	request := irma.NewDisclosureRequest()
	request.Disclose = irma.AttributeConDisCon{
		irma.AttributeDisCon{
			irma.AttributeCon{irma.NewAttributeRequest("pbdf.pbdf.email.email")},
		},
	}

	log.Printf("Sending session request to: %v", conf.IrmaServerURL+"/session/")
	requestBytes, _ := json.Marshal(request)
	resp, err := http.Post(conf.IrmaServerURL+"/session/", "application/json", bytes.NewBuffer(requestBytes))
	if err != nil {
		log.Printf("Failed to post session request to irma server: %v", err)
		return
	}

	var pkg server.SessionPackage
	json.NewDecoder(resp.Body).Decode(&pkg)

	// Start a user session
	session, err := store.Get(r, "irmagast")
	if err != nil {
		log.Printf("Error getting new session: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	session.Values["user"] = &User{
		Email:         "",
		Authenticated: false,
		Token:         pkg.Token,
	}

	err = session.Save(r, w)
	if err != nil {
		log.Printf("Error saving new session: %v", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode(pkg)
}

// Finishes authentication for an admin
func irmaSessionFinish(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Cache-Control", "no-store") // Do not cache the response

	user := getUser(r.Context())
	result := &server.SessionResult{}
	transport := irma.NewHTTPTransport(conf.IrmaServerURL+"/session/"+user.Token, false)
	err := transport.Get("result", result)
	if err != nil {
		log.Printf("Couldn't get session results: %v", err)
		return
	}

	if result.ProofStatus != irma.ProofStatusValid {
		w.WriteHeader(http.StatusForbidden)
		return
	}

	email := *result.Disclosed[0][0].RawValue
	log.Printf("Finished email authentication, updating user with: %v", email)
	user.Email = email
	user.Authenticated = true
	session, _ := store.Get(r, "irmagast")
	session.Values["user"] = user

	err = session.Save(r, w)
	if err != nil {
		log.Printf("Error saving cookie: %v", err)
		return
	}

	w.WriteHeader(http.StatusOK)
}

type registerData struct {
	Name     string `json:"name"`
	Location string `json:"location"`
	Onetime  bool   `json:"onetime"`
}

// Registers a new location/meeting for an authenticated admin
func register(w http.ResponseWriter, r *http.Request) {
	user := getUser(r.Context())

	var received registerData
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&received)
	if err != nil {
		log.Printf("error decoding json: %v", err)
		return
	}

	id := ksuid.New().String()
	stmt, err := db.Prepare("INSERT INTO locations (location_id, name, location, email, onetime) VALUES (?, ?, ?, ?, ?)")
	defer stmt.Close()
	if err != nil {
		log.Printf("Wrong prepared statement: %v", err)
		return
	}
	_, err = stmt.Exec(id, received.Name, received.Location, user.Email, received.Onetime)
	if err != nil {
		log.Printf("Storing entry failed: %v", err)
		return
	}

	w.WriteHeader(http.StatusOK)
}

func (user *User) getLocations() ([]*Location, error) {
	rows, err := db.Query("SELECT location_id, name, location FROM locations WHERE email=?", user.Email)
	if err != nil {
		log.Printf("Wrong prepared statement: %v", err)
		return nil, err
	}
	defer rows.Close()

	locations := []*Location{}
	for rows.Next() {
		var id string
		var name string
		var location string
		if err = rows.Scan(&id, &name, &location); err != nil {
			log.Printf("Scan error: %v", err)
			return nil, err
		}
		locations = append(locations, &Location{Id: id, Name: name, Location: location})
	}

	return locations, nil
}

type overviewData struct {
	Email     string      `json:"email"`
	Locations []*Location `json:"locations"`
}

// Returns an overview for an authenticated admin
func overview(w http.ResponseWriter, r *http.Request) {
	user := getUser(r.Context())
	locs, err := user.getLocations()
	if err != nil {
		log.Printf("error getting locations for user: %s", err)
		return
	}

	viewData := &overviewData{Email: user.Email, Locations: locs}
	w.WriteHeader(http.StatusOK)
	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode(viewData)
}

type resultEntry struct {
	Time string `json:"time"`
	Ct   string `json:"ct"`
}

type resultData struct {
	Entries []*resultEntry `json:"entries"`
}

// Sends encrypted blobs for a location of an admin
func results(w http.ResponseWriter, r *http.Request) {
	user := getUser(r.Context())
	id := mux.Vars(r)["id"]

	locs, err := user.getLocations()
	if err != nil {
		log.Printf("error finding locations for user: %v", err)
		return
	}

	found := false
	for _, loc := range locs {
		if loc.Id == id {
			found = true
			break
		}
	}

	if !found {
		log.Printf("location not registered with user")
		return
	}

	entries := []*resultEntry{}
	rows, err := db.Query("SELECT time, ct from checkins WHERE location_id=?", id)
	if err != nil {
		log.Printf("Error querying database: %v", err)
		return
	}
	defer rows.Close()

	var time string
	var ct []byte
	for rows.Next() {
		if err = rows.Scan(&time, &ct); err != nil {
			log.Printf("Scan error: %v", err)
			return
		}
		base64ct := base64.StdEncoding.EncodeToString(ct)
		entries = append(entries, &resultEntry{Time: time, Ct: base64ct})
	}

	w.WriteHeader(http.StatusOK)
	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resultData{entries})
}

type gastData struct {
	Location_id string `json:"location_id"`
	Ciphertext  string `json:"ct"`
}

// Receives encrypted ciphertexts
func postGastSession(w http.ResponseWriter, r *http.Request) {
	var received gastData
	json.NewDecoder(r.Body).Decode(&received)

	ct_bytes, err := base64.StdEncoding.DecodeString(received.Ciphertext)
	if err != nil {
		log.Printf("Error decoding string from gast data: %v", err)
		return
	}

	stmt, err := db.Prepare("INSERT INTO checkins (location_id, ct) VALUES (?, ?)")
	if err != nil {
		log.Printf("Couldnt prepare statement: %v", err)
		return
	}
	defer stmt.Close()

	log.Printf("Inserting gast data at location %v", received.Location_id)
	_, err = stmt.Exec(received.Location_id, ct_bytes)
	if err != nil {
		log.Printf("Error storing checkin entry: %v", err)
		return
	}
	log.Print("Succesfull check-in")

	w.WriteHeader(http.StatusOK)
}

func logout(w http.ResponseWriter, r *http.Request) {
	session, err := store.Get(r, "irmagast")
	if err != nil {
		log.Printf("Error finding cookie: %v", err)
		return
	}
	session.Values["user"] = User{}
	session.Options.MaxAge = -1
	err = session.Save(r, w)
	if err != nil {
		log.Printf("error saving cookie: %v", err)
		return
	}
}

func main() {
	var confPath string

	flag.StringVar(&confPath, "config", "config.yaml", "path to configuration file")
	flag.Parse()

	readConfig(confPath)
	initDatabase()
	initSessionStorage()

	r := mux.NewRouter()

	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("static/"))))

	// admin endpoints, authenticated by cookie
	adminRouter := r.PathPrefix("/admin/").Subrouter()
	adminRouter.Use(AuthMiddleware)

	adminRouter.HandleFunc("/login", login).Methods("GET")
	adminRouter.HandleFunc("/irmasession_start", irmaSessionStart).Methods("GET")
	adminRouter.HandleFunc("/irmasession_finish", irmaSessionFinish).Methods("GET")
	adminRouter.HandleFunc("/register", register).Methods("POST")
	adminRouter.HandleFunc("/overview", overview).Methods("GET")
	adminRouter.HandleFunc("/results/{id}", results).Methods("GET")
	adminRouter.HandleFunc("/logout", logout).Methods("GET")

	// gastsession endpoints
	r.HandleFunc("/gast/gastsession", postGastSession).Methods("POST")

	log.Printf("Listening on %s\n", conf.BindAddr)
	if err := http.ListenAndServe(conf.BindAddr, r); err != nil {
		log.Fatalf("Error while serving: %v", err)
	}
}