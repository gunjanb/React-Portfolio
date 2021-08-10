import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./contentpage.css";

function Contentpage() {
  return (
    <Container
      fluid
      className="pt-4 min-vh-100"
      style={{
        // background:
        //   "linear-gradient(90deg, hsla(0, 100%, 67%, 1) 0%, hsla(0, 100%, 89%, 1) 100%)",
        background: "#7d0909",
      }}
    >
      <Row className="row-height">
        {/* <div className="row m"> */}
        {/* <Col sm={12} md={3} lg={3}> */}
        <Col lg={3} className="sidebar">
          {/* <div className="sidebar-custom-styles py-3 px-2 rounded"> */}
          <Sidebar />
          {/* </div> */}
        </Col>
        {/* <Col sm={12} md={9} lg={9}> */}
        <Col lg={9}>
          <div className="content-custom-styles py-3 px-2 rounded hover-shadow">
            {/* navbar */}
            <Navbar />
            <Route exact path="/content/">
              <About />
            </Route>
            <Route path="/content/portfolio">
              <Portfolio />
            </Route>
            <Route path="/content/resume">
              <Resume />
            </Route>
            <Route path="/content/contact">
              <Contact />
            </Route>
          </div>
        </Col>
        {/* <div className="col-3 sidebar">Hi</div>
        <div className="col-9 main-content ">there</div> */}
      </Row>
    </Container>
  );
}

export default Contentpage;
