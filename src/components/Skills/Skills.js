import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { AiFillHtml5, AiFillApi, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiVisualstudio } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiCanva } from "react-icons/si";
import { BiMovie } from "react-icons/bi";
import { MdSupervisorAccount } from "react-icons/md";
import accountable from "../../images/accountable.png";
import appreciation from "../../images/appreciation.png";
import approachable from "../../images/approachable.png";
import communication from "../../images/communication.png";
import conflict from "../../images/conflict.png";
import positivity from "../../images/positivity.png";
import feedback from "../../images/feedback.png";
import empathy from "../../images/empathy.png";
import inclusion from "../../images/inclusion.png";
import "./style.css";

const Skills = () => {
  const popover = (text) => (
    <Popover id="popover-basic">
      <Popover.Body>{text}</Popover.Body>
    </Popover>
  );

  return (
    <section
      id="skillsSection"
      style={{
        backgroundColor: "#e5e5e5",
      }}
    >
      <Container className="skills-container">
        <h2 className="section-header">&#60;Skills&#62;</h2>
        <div className="skills">
          <Card style={{ width: "34rem" }} className="skill-group">
            <Card.Header as="h5" style={{ textAlign: "center" }}>
              Technology
            </Card.Header>
            <Row>
              <Col style={{ padding: "0 0 0 12px" }}>
                <ListGroup variant="flush" style={{ textAlign: "center" }}>
                  <ListGroup.Item>
                    <AiFillHtml5 size={28} />
                    &nbsp; HTML5
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <DiCss3 size={28} />
                    &nbsp; CSS3
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <DiJavascript1 size={28} />
                    &nbsp; JavaScript
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FaReact size={28} />
                    &nbsp; React
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BsFillBootstrapFill size={28} />
                    &nbsp; React-Bootstrap
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col style={{ padding: "0 12px 0 0" }}>
                <ListGroup variant="flush" style={{ textAlign: "center" }}>
                  <ListGroup.Item>
                    <AiFillApi size={28} />
                    &nbsp; API
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <AiFillGithub size={28} />
                    &nbsp; GitHub
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <DiVisualstudio size={28} />
                    &nbsp; VSCode
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <SiCanva size={28} />
                    &nbsp; Canva
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <BiMovie size={28} />
                    &nbsp; iMovie
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card>
          <Card style={{ width: "34rem" }}>
            <Card.Header as="h5" style={{ textAlign: "center" }}>
              People
            </Card.Header>
            <Row>
              <Col style={{ padding: "0 0 0 12px" }}>
                <ListGroup variant="flush" style={{ textAlign: "center" }}>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={() => popover("I like feedback")}
                  >
                    <ListGroup.Item action>
                      <img
                        src={feedback}
                        alt="Constructive Feedback"
                        width="28"
                        height="28"
                      />
                      &nbsp; Constructive Feedback
                    </ListGroup.Item>
                  </OverlayTrigger>
                  <ListGroup.Item action>
                    <img
                      src={conflict}
                      alt="Conflict Mediation"
                      width="28"
                      height="28"
                    />
                    &nbsp; Conflict Mediation
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <img
                      src={communication}
                      alt="Communication"
                      width="28"
                      height="28"
                    />
                    &nbsp; Communication
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <img
                      src={positivity}
                      alt="Positivity"
                      width="28"
                      height="28"
                    />
                    &nbsp; Positivity/Optimism
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <img src={empathy} alt="Empathy" width="28" height="28" />
                    &nbsp; Empathy
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col style={{ padding: "0 12px 0 0" }}>
                <ListGroup variant="flush" style={{ textAlign: "center" }}>
                  <ListGroup.Item action>
                    <img
                      src={inclusion}
                      alt="Inclusion"
                      width="28"
                      height="28"
                    />
                    &nbsp; Inclusion
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <img
                      src={accountable}
                      alt="Accountability"
                      width="28"
                      height="28"
                    />
                    &nbsp; Accountability
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <img
                      src={approachable}
                      alt="Approachability"
                      width="28"
                      height="28"
                    />
                    &nbsp; Approachability
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <img
                      src={appreciation}
                      alt="Appreciation/Praise"
                      width="28"
                      height="28"
                    />
                    &nbsp; Appreciation/Praise
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <MdSupervisorAccount size={28} />
                    &nbsp; Supervision
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card>
        </div>
        <h2 className="section-header">&#60;/Skills&#62;</h2>
      </Container>
    </section>
  );
};

export default Skills;
