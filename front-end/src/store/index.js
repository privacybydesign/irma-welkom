import { createStore, applyMiddleware, combineReducers } from "redux";
import guest_lists from "./guest_lists";
import checkins from "./checkins";
import guest_page from "./guest_page";
import Client from "./irmaseal";
import JWT from "jsonwebtoken";
import { WAARSERVERURL, IRMASERVERURL, PKGSERVERURL } from "../constants";

/**
 * Handles all dispatches for changing the login state
 *  - dispatch({type: 'initHostPage'}) inits the login process.
 *  - dispatch({type: 'loadedGuestLists'}) can be done to indicate that the login irma session has been succeeded.
 *    The IRMA-frontend session object on how to do the IRMA session can be found in the `irmaSession` field
 *    of the login redux state.
 *  - dispatch({type: 'logOut'}) can be done to force a logout to the redux state. This will also handle
 *    the session deletion at the server.
 */
function handleLogin({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === "initHostPage") {
      dispatch({ type: "loadingGuestLists" });
      fetch(`${WAARSERVERURL}/admin/overview`, { credentials: "include" })
        .then((resp) => {
          if (resp.status !== 200) throw resp.status;
          return resp.json();
        })
        .then((json) => {
          dispatch({
            type: "loadedGuestLists",
            entries: json["locations"],
            email: json["email"],
          });
        })
        .catch((status) => {
          // admin is not logged in yet
          // prepare an irma session
          if (status === 403) {
            dispatch({
              type: "startHostPage",
              irmaSession: {
                url: WAARSERVERURL,
                start: {
                  credentials: "include",
                  url: (o) => `${o.url}/admin/irmasession_start`,
                },
                result: {
                  credentials: "include",
                  url: (o) => `${o.url}/admin/irmasession_finish`,
                  parseResponse: (r) => r.status,
                },
              },
            });
          }
        });
    } else if (getState().guestLists.loggedIn && action.type === "logOut") {
      fetch(`${WAARSERVERURL}/admin/logout`, { credentials: "include" }).then(
        (resp) => {
          if (resp.status === 204) {
            dispatch({
              type: "loggedOut",
              irmaSession: {
                credentials: "include",
                url: WAARSERVERURL,
                start: {
                  credentials: "include",
                  url: (o) => `${o.url}/admin/irmasession_start`,
                },
                esult: {
                  credentials: "include",
                  url: (o) => `${o.url}/admin/irmasession_finish`,
                  parseResponse: (r) => r.status,
                },
              },
            });
          }
        }
      );
    } else if (action.type === "loggedOut") {
      localStorage.clear("qrona");
      dispatch({ type: "initHostPage" });
    }
    return next(action);
  };
}

/**
 * Handles all dispatch calls for deleting guestLists
 * - dispatch ({
 *    type: 'deleteGuestList',
 *    location_id: '<Location_id of the guest list to remove'
 *    })
 */
function handleDeleteGuestList({ getState, dispatch }) {
  return (next) => (action) => {
    if (getState().guestLists.loggedIn && action.type === "deleteGuestList") {
      dispatch({ type: "loadingGuestLists" });
      fetch(`${WAARSERVERURL}/admin/remove/${action.location_id}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then((resp) => {
          if (resp.status !== 204) throw resp.status;
          dispatch({ type: "reloadGuestLists" });
        })
        .catch((err) => {
          dispatch({ type: "errorGuestLists", error: err });
        });
    }
    return next(action);
  };
}

/**
 * Handles all dispatch calls for adding guest lists
 *  - dispatch({
 *      type: 'addGuestList',
 *      name: '<Name of new guest list>',
 *      location: '<Location of new guest list>'
 *      onetime: true/false, // Boolean to indicate whether the guest list is for a one-time-event.
 *    })
 */
function handleAddGuestList({ getState, dispatch }) {
  return (next) => (action) => {
    if (getState().guestLists.loggedIn && action.type === "addGuestList") {
      dispatch({ type: "loadingGuestLists" });
      fetch(`${WAARSERVERURL}/admin/register`, {
        mode: "cors",
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: action.name,
          location: action.location,
          onetime: action.onetime,
          ...(action.onetime && { event_date: action.event_date }),
        }),
      })
        .then((resp) => {
          if (resp.status !== 204) throw resp.status;
          dispatch({ type: "reloadGuestLists" });
        })
        .catch((err) => {
          dispatch({ type: "errorGuestLists", error: err });
        });
    }
    return next(action);
  };
}

/**
 * Handles all dispatch calls for updating the guest lists
 *  - dispatch({type: 'loadGuestLists'}) can be done to fetch the guest lists of the user that is logged in
 *    from the server, except when it has already been loaded before.
 *  - dispatch({type: 'reloadGuestLists'}) can be done to fetch the guest lists of the user that is logged in
 *    from the server and overwrites the previous load (if any).
 */
function handleUpdateGuestLists({ getState, dispatch }) {
  return (next) => (action) => {
    if (
      action.type === "reloadGuestLists" ||
      (action.type === "loadGuestLists" && !getState().guestLists.loaded)
    ) {
      dispatch({
        type: "loadingGuestLists",
        reloading: action.type === "reloadGuestLists",
      });
      fetch(`${WAARSERVERURL}/admin/overview`, { credentials: "include" })
        .then((resp) => {
          if (resp.status !== 200) throw resp.status;
          return resp.json();
        })
        .then((json) => {
          dispatch({
            type: "loadedGuestLists",
            entries: json["locations"],
            email: json["email"],
          });
        })
        .catch((err) => {
          dispatch({ type: "errorGuestLists", error: err });
        });
    }

    return next(action);
  };
}

/**
 * Handles all dispatch calls for updating the checkins of a certain guest list
 *  - dispatch({type: 'initCheckins'}, location_id: <Location id>) to initialize loading the checkins.
 *  - dispatch({type: 'initializedCheckins'}, location_id: <Location id>) to indicate that a client is ready to start loading the checkins.
 *  - dispatch({type: 'loadCheckins'}, location_id: <Location id>) to start loading the checkins. Assumes we're initialized.
 *  - dispatch({type: 'decryptingCheckins', ciphertexts: <ciphertexts>, location_id: <Location id>}) to start decrypting the ciphertexts.
 *  - dispatch({type: 'verifyCheckins', jwts: <jwts>, location_id: <Location id>}) to start verifying the jwts.
 *  - dispatch({type: 'loadedCheckins', entries: <entries>, location_id: <Location_id> }) to indicate that checkins were loaded.
 */
function handleUpdateCheckins({ dispatch, getState }) {
  return (next) => (action) => {
    if (action.type === "initCheckins") {
      // TODO: initialize client globally
      Client.build(PKGSERVERURL).then((client) => {
        dispatch({
          type: "initializedCheckins",
          client: client,
          location_id: action.location_id,
        });
      });
    } else if (
      action.type === "loadCheckins" &&
      getState().checkins.state === "initialized"
    ) {
      dispatch({ type: "loadingCheckins", location_id: action.location_id });
      fetch(`${WAARSERVERURL}/admin/results/${action.location_id}`, {
        credentials: "include",
      })
        .then((resp) => {
          if (resp.status !== 200) throw resp.status;
          return resp.json();
        })
        .then((json) => {
          if (json["entries"].length === 0)
            throw new Error("no entries to decrypt");
          dispatch({
            type: "decryptingCheckins",
            location_id: action.location_id,
            ciphertexts: json["entries"],
          });
        })
        .catch((err) => {
          dispatch({
            type: "errorCheckins",
            location_id: action.location_id,
            error: err,
          });
        });
    } else if (action.type === "decryptingCheckins") {
      let cts = action.ciphertexts;
      let client = getState().checkins.client;
      let host_email = getState().guestLists.email;
      client
        .requestToken(host_email)
        .then((token) => {
          let jwtOrEmailPromises = [];
          cts.forEach(function (entry) {
            let ct = Buffer.from(entry.ct, "base64");
            jwtOrEmailPromises.push(
              new Promise(function (resolve, reject) {
                let ts = client.extractTimestamp(ct);
                if (ts === -1) return reject(new Error("no timestamp"));
                return client
                  .requestKey(token, ts)
                  .then((key) => {
                    let plain = client.decrypt(key, ct);
                    var obj;
                    if ("jwt" in plain) {
                      obj = { jwt: plain.jwt };
                    } else if ("email" in plain) {
                      obj = { email: plain.email };
                    } else {
                      throw new Error("plain should contain jwt or email");
                    }
                    resolve({
                      time: entry.time,
                      ...obj,
                    });
                  })
                  .catch((err) => reject(err));
              })
            );
          });
          Promise.allSettled(jwtOrEmailPromises)
            .then((promises) =>
              promises
                .filter((promise) => promise.status === "fulfilled")
                .map((promise) => promise.value)
            )
            .then((jwtOrEmails) =>
              dispatch({
                type: "verifyingCheckins",
                location_id: action.location_id,
                jwtOrEmails: jwtOrEmails,
              })
            );
        })
        .catch((err) => {
          if (err === "Aborted") {
            dispatch({
              type: "initializedCheckins",
              client: client,
              location_id: action.location_id,
            });
          }
        });
    } else if (action.type === "verifyingCheckins") {
      let entries = [];
      fetch(IRMASERVERURL + "/publickey")
        .then((resp) => resp.text())
        .then((pk) => {
          action.jwtOrEmails.forEach((entry) => {
            let [date, time] = entry.time.split(" ");
            if ("jwt" in entry) {
              JWT.verify(
                entry.jwt,
                pk,
                { maxAge: "14d", algorithms: ["RS256"] },
                function (err, decoded) {
                  if (!err && decoded.proofStatus === "VALID") {
                    let email = decoded.disclosed[0][0].rawvalue;
                    entries.push({
                      mail: email,
                      date: date,
                      time: time,
                    });
                  }
                }
              );
            } else if ("email" in entry) {
              entries.push({ mail: entry.email, date: date, time: time });
            } else throw new Error("decrypted entry should have email or jwt");
          });
          dispatch({
            type: "loadedCheckins",
            location_id: action.location_id,
            entries: entries,
          });
        });
    }
    return next(action);
  };
}

/**
 * Handles all dispatch calls for updating the checkins of a certain guest list
 *  - dispatch({type: 'initDisclosurePage')} to initialize the disclosurePage.
 *  - dispatch({type: 'showDisclosurePage')} to indicate initialization is finished.
 *  - dispatch({type: 'sendGuestData', data: ...}) to start encrypting the session results.
 *  - dispatch({type: 'guestDataEncrypted', location_id:<id>, ciphertext: <ct>})
 *    to indicate that the session results have been encrypted and can be sent to the data server.
 */
function handleDisclosurePage({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === "initDisclosurePage") {
      dispatch({
        type: "startDisclosurePage",
        irmaSession: {
          url: IRMASERVERURL,
          start: {
            url: (o) => `${o.url}/session`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              validity: 14 * 24 * 60 * 60, // jwt is valid for 2 weeks
              request: {
                "@context": "https://irma.app/ld/request/disclosure/v2",
                disclose: [
                  [["pbdf.pbdf.email.email"], ["pbdf.sidn-pbdf.email.email"]],
                ],
              },
            }),
            parseResponse: (r) => r.json(),
          },
          mapping: {
            sessionPtr: (r) => r.sessionPtr,
            sessionToken: (r) => r.token,
          },
          result: {
            url: (o, { sessionToken }) =>
              `${o.url}/session/${sessionToken}/result-jwt`,
            parseResponse: (r) => r.text(),
          },
        },
      });
    } else if (action.type === "showDisclosurePage") {
      dispatch({ type: "disclosurePage" });
    } else if (action.type === "sendGuestData") {
      let result = getState().DisclosurePage.result;
      let resultType = getState().DisclosurePage.resultType;
      let host = getState().DisclosurePage.host;
      let id = getState().DisclosurePage.id;

      // TODO: initalize client earlier to avoid loading time
      Client.build(PKGSERVERURL).then((client) => {
        try {
          let ct = client.encrypt(host, { [resultType]: result });
          const base64ct = new Buffer(ct).toString("base64");
          dispatch({
            type: "guestDataEncrypted",
            location_id: id,
            ciphertext: base64ct,
          });
        } catch (err) {
          dispatch({ type: "errorDisclosurePage", error: err });
        }
      });
    } else if (action.type === "guestDataEncrypted") {
      fetch(`${WAARSERVERURL}/gast/gastsession`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          location_id: action.location_id,
          ciphertext: action.ciphertext,
        }),
      })
        .then((resp) => {
          if (resp.status !== 204) throw resp.status;
          dispatch({ type: "guestDataSent" });
        })
        .catch((err) => {
          dispatch({ type: "errorDisclosurePage", error: err });
        });
    }
    return next(action);
  };
}

export default function () {
  return createStore(
    combineReducers({
      guestLists: guest_lists,
      checkins: checkins,
      DisclosurePage: guest_page,
    }),
    applyMiddleware(
      handleLogin,
      handleAddGuestList,
      handleDeleteGuestList,
      handleUpdateGuestLists,
      handleUpdateCheckins,
      handleDisclosurePage
    )
  );
}
