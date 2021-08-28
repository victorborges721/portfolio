import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import borges_pic from "../../images/borges_pic.jpeg";
import "./style.css";

const About = () => {
  return (
    <section
      id="aboutSection"
      style={{ backgroundColor: "#000000", minHeight: "75vh" }}
    >
      <Container>
        <h1>&#60;About&#62;</h1>
        <Row>
          <Col md={4}>
            <div>
              <Image
                src={borges_pic}
                alt="Image of Victor Borges"
                roundedCircle
                fluid
              />
            </div>
          </Col>
          <Col md={8}>
            <h1>About Victor Borges</h1>
          </Col>
        </Row>
        <h1>&#60;/About&#62;</h1>
      </Container>
    </section>
  );
};

export default About;
