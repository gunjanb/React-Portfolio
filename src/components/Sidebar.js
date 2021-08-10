import React from "react";
import { Link } from "react-router-dom";
import {
  FaFilePdf,
  FaLinkedin,
  FaGithubSquare,
  FaChevronCircleLeft,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import Image from "react-bootstrap/Image";
import myimage from "../assets/ProfileImg.jpg";
import resume from "../assets/GunjanBhargava2021.pdf";
import "./sidebar.css";

const styles = {
  atag: { textDecoration: "none", color: "black" },
  imgsize: { height: "10rem", width: "10rem" },
  email: {
    background: "linear-gradient(#ff5858,#ffc8c8)",
    borderRadius: "1rem",
    cursor: "pointer",
    paddingLeft: "5rem",
    paddingRight: "5rem",
  },

  title: {
    backgroundColor: "rgb(177, 170, 170)",
    borderRadius: "1rem",
  },
};

export default function Sidebar() {
  const handleEmailClick = () => {
    window.open("mailto:gunjanbhargava2021@gmail.com");
  };
  return (
    <div className="sidebar-custom-styles py-3 px-2 rounded d-flex flex-column align-items-center justify-content-around">
      {/* <img
        src={myimage}
        alt="avatar"
        style={styles.imgsize}
        className="sidebar-avatar"
      /> */}
      <Image src={myimage} roundedCircle style={styles.imgsize} />
      <div className="my-name"> Gunjan Bhargava</div>
      <div className="title py-2 px-5" style={styles.title}>
        Web Developer
      </div>
      <div className="resume ">
        <a href={resume} download="resume.pdf" style={styles.atag}>
          <IconContext.Provider value={{ color: "black", size: "1rem" }}>
            <FaFilePdf />
          </IconContext.Provider>{" "}
          Download Resume
        </a>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/gunjan-bhargava/" target="_blank">
          <IconContext.Provider value={{ color: "black", size: "3rem" }}>
            <FaLinkedin />
          </IconContext.Provider>
        </a>
        <a href="https://github.com/gunjanb" target="_black">
          <IconContext.Provider value={{ color: "black", size: "3rem" }}>
            <FaGithubSquare />
          </IconContext.Provider>
        </a>
      </div>
      <div
        className="email py-2"
        style={styles.email}
        onClick={handleEmailClick}
      >
        Email
      </div>
      <button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <IconContext.Provider
            value={{
              color: "black",
              size: "2rem",
              background: "#7d0909",
              // padding: "1rem",
            }}
          >
            <FaChevronCircleLeft />
          </IconContext.Provider>
        </Link>
      </button>
    </div>
  );
}
