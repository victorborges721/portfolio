import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import borges_pic from "../../images/borges_pic.jpg";
import "./style.css";

const About = () => {
  return (
    <section id="aboutSection" style={{ backgroundColor: "#000000" }}>
      <Container>
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
            <h2>&#60;About&#62;</h2>
            <Container>
              <h1>
                Hi! I'm Victor, a self-taught Front-End Web Developer based in
                New York.
              </h1>
              <h5>
                I recently transitioned out of Higher Education/Student Affairs
                to pursue web development. Since I've always gravitated toward
                opportunities to learn new tech systems and software, and I
                often served as 'tech-support' for my colleagues and peers, I
                thought I'd give it a shot. I wasn't too surprised when I loved
                it!
              </h5>
            </Container>

            <h2>&#60;/About&#62;</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
