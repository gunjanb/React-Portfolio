import React from "react";
import Skill from "../Skill/Skill";
import { FaDownload } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Row, Col, Button, Container } from "react-bootstrap";
import otherskill from "../data/otherskill.js";
import frontendskill from "../data/frontendskill.js";
import backendskill from "../data/backendskill.js";
import { motion } from "framer-motion";
import resume from "../../assets/GunjanBhargava2021.pdf";
const styles = {
  atag: { textDecoration: "none", color: "black" },
};
const resume_variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

function Resume() {
  return (
    <motion.main
      variants={resume_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div
        // style={styles.resume}
        style={{
          display: "flex",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        <Button variant="secondary" className="m-2">
          Download Resume{" "}
          <a href={resume} download="resume.pdf" style={styles.atag}>
            <IconContext.Provider value={{ color: "white", size: "1rem" }}>
              <FaDownload />
            </IconContext.Provider>{" "}
          </a>
        </Button>
      </div>
      <Container>
        <Row className="">
          <Col sm>
            <h4>Front-end Skills</h4>
            <ul style={{ paddingLeft: "initial" }}>
              {frontendskill.map((skill) => (
                <Skill skill={skill} key={skill} />
              ))}
            </ul>
          </Col>
          <Col sm>
            <h4>Back-end Skills</h4>
            <ul style={{ paddingLeft: "initial" }}>
              {backendskill.map((skill) => (
                <Skill skill={skill} key={skill} />
              ))}
            </ul>
          </Col>
          <Col sm>
            <h4>Other Skills </h4>
            <ul style={{ paddingLeft: "initial" }}>
              {otherskill.map((skill) => (
                <Skill skill={skill} key={skill} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </motion.main>
  );
}

export default Resume;
