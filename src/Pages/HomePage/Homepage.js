import React from "react";
import Particles from "react-particles-js";
import { FaChevronCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./homepage.css";

function Homepage() {
  return (
    <div className="">
      <div
        // styles needed for positioning
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Link to="/"> </Link>
        <h1 style={{ color: "black", margin: "2rem", fontSize: "2rem" }}>
          Hi !!
        </h1>
        <h2 style={{ color: "black", margin: "2rem", fontSize: "2rem" }}>
          <Typewriter
            options={{
              strings: [
                "I am",
                "Gunjan Bhargava",
                "an Engineer",
                "Web Developer",
                "an Artist",
              ],
              autoStart: true,
              loop: true,
              delay: 200,
            }}
          />
        </h2>
        <Link to="/content" style={{ textDecoration: "none" }}>
          <IconContext.Provider
            value={{
              color: "white",
              size: "2rem",
              background: "#7d0909",
              // padding: "1rem",
            }}
          >
            <FaChevronCircleRight />
          </IconContext.Provider>
        </Link>
      </div>

      <Particles
        id="particles-js"
        // to make particle screen 100 %
        // height={window.outerHeight}
        height="100vh"
        className="particles-snow"
        params={{
          particles: {
            number: {
              value: 300,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#B3B3B3",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: false,
              speed: 40,
              size_min: 0.1,
              syno: false,
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "bottom",
              random: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
        }}
      />
    </div>
  );
}
export default Homepage;
