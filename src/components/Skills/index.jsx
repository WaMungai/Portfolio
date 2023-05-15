import React from "react";
import { Container} from "react-bootstrap";
import Techstack from "./TechStack";
import Toolstack from "./ToolStack";
import Particle from "../Libaries/Particle";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default Skills;
