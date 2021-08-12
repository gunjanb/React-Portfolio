import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import myimage from "../assets/ProfileImg2.jpg";
import myimage from "../assets/HalfImage.jpg";
import Bar from "./Bar";

const styles = {
  imgsize: {
    height: "20rem",
    width: "21rem",
  },
};
// const languages = [
//   {
//     icon: "react",
//     name: "JS",
//     level: "45",
//   },
//   {
//     // icon: "react",
//     name: "Java",
//     level: "60",
//   },
//   {
//     // icon: "react",
//     name: "HTML",
//     level: "80",
//   },
//   {
//     icon: react,
//     name: "react",
//     level: "60",
//   },
//   {
//     icon: react,
//     name: "Django",
//     level: "80",
//   },
//   {
//     icon: react,
//     name: "Bootstrap",
//     level: "80",
//   },
// ];

// const tools = [
//   {
//     icon: react,
//     name: "Figma",
//     level: "85",
//   },
//   {
//     icon: react,
//     name: "Photoshop",
//     level: "45",
//   },
//   {
//     icon: react,
//     name: "Illustrator",
//     level: "60",
//   },
//   {
//     icon: react,
//     name: "Framer",
//     level: "45",
//   },
// ];

export default function About() {
  return (
    <Container className="m-4">
      <Row className="justify-content-center">
        <Col lg={6} className="aboutme">
          <p>
            Born and brought up in India.I have a Masters Degree from Indian
            Institute of Technology Delhi(IIT-D) and Bachelors of Engineering in
            Electronics and Telecommunication from RGPV. Was
            <strong> University Merit Holder</strong>.Worked as a Frontend
            Verification Engineer in VLSI Domain in Advance Micro Devices (AMD).
            Currently living in Seattle WA with my family.
          </p>
          <p>
            Web Development revolves around creativity and creative problem
            solving which I love the most.I loved the thrill.I love to see your
            very own imagination comes to life. Would love to contribute my
            skill and experience to make peoples lives simple after completing
            my UW Bootcamp.
          </p>
          <p>
            I enjoy being outside socialising with friends and family.I love to
            paint and play with my little munchkins.
          </p>
        </Col>
        <Col lg={6} className="myimage justify-content-center p-1">
          <Image
            src={myimage}
            className="img-fluid"
            rounded
            style={styles.imgsize}
          />
        </Col>
      </Row>
      {/* <Row>
        <p>
          I am learning to building full stack applications. Below is a quick
          overview of my main technical skill sets and technologies I use.
        </p>
        <Col lg={6}>
          <h5 className="languages-header">Languages and Framework</h5>
          <div className="languages">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </Col>
        <Col lg={6}>
          <h5 className="software-header">Tools and Software</h5>
          <div className="software-tools">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </Col>
      </Row> */}
    </Container>
  );
}
