import React, { useState } from "react";
import "./navbar.css";
//for nav bar implementation
// changing nav item on right depending which item is selected

export default function Navbar() {
  const [active, setActive] = useState("About");

  return (
    <div className="Navbar d-flex justify-content-between">
      <div className="navbar-active">{active}</div>
      <div className="navbar-items d-flex align-self-center">
        {active !== "About" && (
          <div className="navbar-item" onClick={() => setActive("About")}>
            About
          </div>
        )}
        {active !== "Portfolio" ? (
          <div className="navbar-item" onClick={() => setActive("Portfolio")}>
            Portfolio
          </div>
        ) : null}

        {active !== "Resume" && (
          <div className="navbar-item" onClick={() => setActive("Resume")}>
            Resume
          </div>
        )}
        {active !== "Contact" && (
          <div className="navbar-item" onClick={() => setActive("Contact")}>
            Contact
          </div>
        )}
      </div>
    </div>
  );
}
