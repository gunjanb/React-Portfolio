import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [active, setActive] = useState();

  useEffect(() => {
    let currentURL = window.location.href;
    console.log(currentURL);
    if (currentURL.endsWith("/content")) setActive("About");
    else if (currentURL.endsWith("/content/portfolio")) setActive("Portfolio");
    else if (currentURL.endsWith("/content/resume")) setActive("Resume");
    else if (currentURL.endsWith("/content/contact")) setActive("Contact");
  }, [active]);

  return (
    <div className="Navbar d-flex justify-content-between">
      <div className="navbar-active">{active}</div>
      <div className="navbar-items d-flex align-self-center">
        {active !== "About" && (
          <Link to="/content" style={{ textDecoration: "none" }}>
            <div className="navbar-item" onClick={() => setActive("About")}>
              About
            </div>
          </Link>
        )}
        {active !== "Portfolio" ? (
          <Link to="/content/portfolio" style={{ textDecoration: "none" }}>
            <div className="navbar-item" onClick={() => setActive("Portfolio")}>
              Portfolio
            </div>
          </Link>
        ) : null}

        {active !== "Resume" && (
          <Link to="/content/resume" style={{ textDecoration: "none" }}>
            <div className="navbar-item" onClick={() => setActive("Resume")}>
              Resume
            </div>
          </Link>
        )}
        {active !== "Contact" && (
          <Link to="/content/contact" style={{ textDecoration: "none" }}>
            <div className="navbar-item" onClick={() => setActive("Contact")}>
              Contact
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
