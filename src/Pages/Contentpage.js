import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

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
          </div>
        </Col>
        {/* <div className="col-3 sidebar">Hi</div>
        <div className="col-9 main-content ">there</div> */}
      </Row>
    </Container>
  );
}

export default Contentpage;
