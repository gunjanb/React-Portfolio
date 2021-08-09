import React from "react";
import Particles from "react-particles-js";
import { FaFastForward } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const styles = {
  color: { backgroundColor: "#7d0909" },
};
function Homepage() {
  return (
    <div className="" style={styles.color}>
      <div
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
        <h1 style={{ color: "white" }}>Hi there !!!</h1>
        <h1 style={{ color: "white" }}>
          <Typewriter
            options={{
              strings: [
                "I am",
                "Gunjan Bhargava",
                "Full Stack Web Developer",
                "Lets get started by clicking button",
              ],
              autoStart: true,
              loop: true,
              delay: 200,
            }}
          />
        </h1>
        <button>
          <Link to="/content" style={{ textDecoration: "none" }}>
            <IconContext.Provider
              value={{ color: "black", size: ".5rem", borderRadius: "0.5rem" }}
            >
              <FaFastForward />
            </IconContext.Provider>
          </Link>
        </button>
      </div>

      <Particles
        height={window.outerHeight}
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
