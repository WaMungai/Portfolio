import React from "react";
import {Card, Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function HomeSection() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span> 
            </h1>
            <p className="home-about-body">
            I am a seasoned software engineer turned project manager whose extensive experience in the technology industry has equipped me with a deep understanding of software development methodologies, coding languages, and emerging technologies.
              <br /> 
              My expertise extends beyond technical aspects, as I am adept at managing project budgets, resource allocation, and risk mitigation strategies.My strong analytical and problem-solving skills enable me to identify potential challenges early on and implement proactive measures to address them, ensuring project success.
              <br />
             
              In addition to my technical prowess, I possess excellent communication and interpersonal skills, allowing me to effectively liaise with stakeholders, clients, and team members. My ability to translate complex technical concepts into understandable language helps facilitate discussions and decision-making processes.
            </p>
          </Col>
          <Card className="quote-card-view">
         <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Board Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

    
        </blockquote>
         </Card.Body>
          </Card>

        </Row>
     
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/WaMungai"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joyce-mungai-a85b7319b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeSection;
