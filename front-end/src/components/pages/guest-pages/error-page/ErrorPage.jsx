import React from "react";
import Footer from "../../../footer/Footer";
import NavBar from "../../../nav-bar/NavBar";
import Error from "./Error";

function ErrorPage() {
  return (
    <div className="container">
      <NavBar link="menu" /> <p></p>
      <div className="filler">
        <Error />
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
