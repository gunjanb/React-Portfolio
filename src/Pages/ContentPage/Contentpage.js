import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/SideBar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Portfolio from "../../components/Portfolio/Portfolio";
import Resume from "../../components/Resume/Resume";
import Contact from "../../components/Contact/Contact";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import "./contentpage.css";
import { AnimatePresence } from "framer-motion";

function Contentpage() {
  const location = useLocation();
  return (
    <Container fluid className="pt-4 min-vh-100 content">
      <Row className="row-height">
        {/* <div className="row m"> */}
        {/* <Col sm={12} md={3} lg={3}> */}
        <Col lg={3} className="sidebar">
          {/* <div className="sidebar-custom-styles py-3 px-2 rounded"> */}
          <Sidebar />
          {/* </div> */}
        </Col>
        {/* <Col sm={12} md={9} lg={9}> */}
        <Col lg={9} className="main-component">
          <div className="content-custom-styles py-3 px-2 rounded hover-shadow">
            {/* navbar */}
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/content">
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
                <Route>
                  <Redirect to path="/content" />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </Col>
        {/* <div className="col-3 sidebar">Hi</div>
        <div className="col-9 main-content ">there</div> */}
      </Row>
    </Container>
  );
}

export default Contentpage;
