import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

const About = () => {
  return (
    <section
      id="aboutSection"
      style={{ backgroundColor: "#000000", minHeight: "75vh" }}
    >
      <Container>
        <h1>&#60;About&#62;</h1>
        <h1>&#60;/About&#62;</h1>
      </Container>
    </section>
  );
};

export default About;
