import React from "react";
import { Row, Col, Image } from "react-bootstrap";
// import myimage from "../assets/ProfileImg2.jpg";
import myimage from "../../assets/HalfImage.jpg";
import { motion } from "framer-motion";

const styles = {
  imgsize: {
    height: "16rem",
    width: "20rem",
  },
};
const about_variants = {
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
export default function About() {
  return (
    <motion.div
      className="m-2"
      variants={about_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Row className="justify-content-center">
        <Col lg={8} className="aboutme" style={{ padding: "1.75rem" }}>
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
        <Col lg={4} className="p-4 mt-2">
          <Image
            src={myimage}
            className="img-fluid"
            rounded
            style={styles.imgsize}
          />
        </Col>
      </Row>
    </motion.div>
  );
}
