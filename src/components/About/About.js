import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import myimage from "../assets/ProfileImg2.jpg";
import myimage from "../../assets/HalfImage.jpg";

const styles = {
  imgsize: {
    height: "20rem",
    width: "26rem",
  },
};

export default function About() {
  return (
    <Container className="m-2">
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
        <Col lg={6} className="p-1">
          <Image
            src={myimage}
            className="img-fluid"
            rounded
            style={styles.imgsize}
          />
        </Col>
      </Row>
    </Container>
  );
}
