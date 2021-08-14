import React from "react";
import Skill from "../Skill/Skill";
import { FaDownload } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Row, Col, Button, Container } from "react-bootstrap";
import otherskill from "../data/otherskill.js";
import frontendskill from "../data/frontendskill.js";
import backendskill from "../data/backendskill.js";

import resume from "../../assets/GunjanBhargava2021.pdf";
const styles = {
  atag: { textDecoration: "none", color: "black" },
  btnwidth: { width: "fitContent" },
  // resume: {
  //   display: "flex",
  //   flexDirection: "column",
  //   // alignItems: "center",
  //   padding: "1rem",
  // },
};
function Resume() {
  return (
    <main>
      <div
        // style={styles.resume}
        style={{
          width: "fitContent",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
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
        <Row className="p-2">
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
    </main>
  );
}

export default Resume;
