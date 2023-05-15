import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/home-main.svg";
import HomeSection from "./HomeSection";
import Particle from "../Libaries/Particle";
import Title from './Title'

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Howdy!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name">  JOYCE MUNGAI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Title />
              </div>
            </Col>
            <p style={{ color: "rgb(155 126 172)" }}>
            "I code, thats my super power!"{" "}
          </p>
          
          </Row>
        </Container>
      </Container>
      <HomeSection />
    </section>
  );
}

export default Home;
