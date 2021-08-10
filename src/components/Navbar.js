import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
//for nav bar implementation
// 1.changing nav item on right depending which item is selected
//so for routing
//1. needs to provide links around the div so when clicked we get to that path in browser done with LINK and wrapping application by router
//2. now we need to have some component wgich can help to render specific pages/components/  this can be achieved by route component and switch
//3. create a Route and render the component
//4. In react route does a partial matching so / /resume /project all will match we can solve this by using exact property matching
//5. if u chnage ur url manually to /content/project itwill show the content on page right but active component is not changing as well as
//6+ if u refresh page it going to set the active item in navbar as about aas its the default value when the component is rendered again
//7 to avoid this behaviour we need to remove theabout from usestate as initinal state
//8. so now  whatever is there in browser has to be in  page so we take advantage of browser location href and use useEffect hook from react
// After implementing hook even after reshig the page the link and page matter will be in sync with but if user types something wrong in link the
// we need to provide a default path to home using redirect component from react dom router

export default function Navbar() {
  const [active, setActive] = useState();

  useEffect(() => {
    let currentURL = window.location.href;
    console.log(currentURL);
    if (currentURL.endsWith("/content")) setActive("About");
    else if (currentURL.endsWith("/content/protfolio")) setActive("Portfolio");
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
