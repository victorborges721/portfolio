import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

const Skills = () => {
  return (
    <section
      id="skillsSection"
      style={{
        backgroundColor: "#e5e5e5",
      }}
    >
      <Container className="skills-container">
        <h2 className="section-header">&#60;Skills&#62;</h2>

        <h2 className="section-header">&#60;/Skills&#62;</h2>
      </Container>
    </section>
  );
};

export default Skills;
