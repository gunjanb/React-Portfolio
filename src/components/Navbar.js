import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  useState();

  return (
    <div className="Navbar d-flex justify-content-between">
      <div className="navbar-active">About</div>
      <div className="navbar-items d-flex align-self-center">
        <div className="navbar-item ">About</div>
        <div className="navbar-item ">Portfolio</div>
        <div className="navbar-item ">Resume</div>
        <div className="navbar-item ">Contact</div>
      </div>
    </div>
  );
}
