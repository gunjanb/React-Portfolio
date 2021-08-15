import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { motion } from "framer-motion";

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

  // motion variants
  const navbar_variants = {
    hidden: {
      y: "-30vh",
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="Navbar d-flex justify-content-between"
      variants={navbar_variants}
      initial="hidden"
      animate="visible"
    >
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
    </motion.div>
  );
}
