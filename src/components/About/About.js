import React from "react";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import borges_pic from "../../images/borges_pic.jpg";
import resume from "../../images/VictorBorges_Resume.pdf";
import { IconContext } from "react-icons";
import { GrDocumentPdf } from "react-icons/gr";
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
                className="grow"
              />
            </div>
          </Col>
          <Col md={8}>
            <h2 className="about-header section-header">&#60;About&#62;</h2>
            <Container className="about-info">
              <h1>
                Hi! I'm Victor, a self-taught{" "}
                <span className="about-highlight grow">
                  Front-End Web Developer.
                </span>
              </h1>
              <h5>
                I recently transitioned out of Higher Education/Student Affairs
                to pursue web development. Since I've always gravitated toward
                opportunities to learn new tech systems and software, and I
                often served as 'tech-support' for my colleagues and peers, I
                thought I'd give it a shot. I wasn't too surprised when I loved
                it!
              </h5>
              <Button href={resume} className="resume-button" download>
                <GrDocumentPdf />
                &nbsp; Resume
              </Button>
            </Container>

            <h2 className="about-header section-header">&#60;/About&#62;</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
