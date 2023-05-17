import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Resume from "../Resume/Resume";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{
                  paddingBottom: 15,
                  marginLeft: "10px",
                }}
                className="heading"
              >
                {" "}
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 style={{
                  paddingBottom: 15,
                  marginLeft: "15px",
                }} className="heading-name">
                {" "}
                I'M
                <strong className="main-name"> CHINMAY BHOIR </strong>
              </h1>
              <Row>
              <div style={{ padding: 50, paddingTop:20, paddingBottom: 0,textAlign: "left", marginLeft: "25px"}}>
                <Type />
              </div>
              </Row>
              <Row>
                <Col><div style={{ padding: 0 , paddingTop: 0, marginLeft: "46px"}}>
                  <Resume />
                </div>
                </Col>
                <Col><div style={{ padding: 0 , paddingTop: 0, marginLeft: "20px"}}>
                  <Resume />
                </div>
                </Col>
              </Row>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
export default Home;