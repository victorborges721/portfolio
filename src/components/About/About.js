import React from "react";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import borges_pic from "../../images/borges_pic.jpg";
import resume from "../../images/VictorBorges_Resume.pdf";
import { GrDocumentPdf } from "react-icons/gr";
import "./style.css";

const About = () => {
  return (
    <section id="aboutSection" style={{ backgroundColor: "#000000" }}>
      <Container>
        <Row>
          <Col md={4} className="col-photo">
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
              <h6>
                Becoming a self-taught web developer has made me a stronger
                learner who can pick up new tools and languages quickly and
                utilize them effectively. It also gave me the flexibility I
                needed to decide that front-end web development was the path for
                me. I’m excited to enter the field full-time and to connect with
                other developers who I can learn from and be inspired by to make
                applications that have a lasting impact.
              </h6>
              <h6>
                I’m making the transition into web development from Higher
                Education, where I developed a host of skills including an
                understanding of diversity, equity, and inclusion, effective
                written and oral communication, and empathy. I plan to bring
                these skills with me to your organization to promote a positive
                team environment.
              </h6>
              <h6>
                Out of the office you’ll find me playing Pokémon Go, theorizing
                about what will happen in the next Marvel film/show, or singing
                in an a cappella group.
              </h6>
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
