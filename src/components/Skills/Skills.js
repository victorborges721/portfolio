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
                    placement="top"
                    overlay={popover(
                      "I seek feedback from my supervisor and peers to ensure I’m meeting expectations. I provide feedback in an appropriate setting to ensure the individual feels supported."
                    )}
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
                  <OverlayTrigger
                    placement="top"
                    overlay={popover(
                      "I have experience helping supervisees resolve conflict that can impact a team dynamic."
                    )}
                  >
                    <ListGroup.Item action>
                      <img
                        src={conflict}
                        alt="Conflict Mediation"
                        width="28"
                        height="28"
                      />
                      &nbsp; Conflict Mediation
                    </ListGroup.Item>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={popover(
                      "I communicate clearly and effectively to limit misunderstanding. I prepare in advance for challenging conversations or presentations."
                    )}
                  >
                    <ListGroup.Item action>
                      <img
                        src={communication}
                        alt="Communication"
                        width="28"
                        height="28"
                      />
                      &nbsp; Communication
                    </ListGroup.Item>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={popover(
                      "My positive attitude has an impact on those I work with and supports a friendly work environment."
                    )}
                  >
                    <ListGroup.Item action>
                      <img
                        src={positivity}
                        alt="Positivity"
                        width="28"
                        height="28"
                      />
                      &nbsp; Positivity/Optimism
                    </ListGroup.Item>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={popover(
                      "I have a strong understanding of how my actions and words can impact others. I can put myself in the shoes of others to better understand their perspective."
                    )}
                  >
                    <ListGroup.Item action>
                      <img src={empathy} alt="Empathy" width="28" height="28" />
                      &nbsp; Empathy
                    </ListGroup.Item>
                  </OverlayTrigger>
                </ListGroup>
              </Col>
              <Col style={{ padding: "0 12px 0 0" }}>
                <ListGroup variant="flush" style={{ textAlign: "center" }}>
                  <OverlayTrigger
                    placement="top"
                    overlay={popover(
                      "I’ve been trained on various diversity and inclusion topics, including sexual orientation, gender identity, ability, race, and ethnicity. There is always more to learn!"
                    )}
                  >
                    <ListGroup.Item action>
                      <img
                        src={inclusion}
                        alt="Inclusion"
                        width="28"
                        height="28"
                      />
                      &nbsp; Inclusion
                    </ListGroup.Item>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={popover(
                      "I hold myself accountable for projects I agree to complete. I hold supervisees accountable for what is expected from them."
                    )}
                  >
                    <ListGroup.Item action>
                      <img
                        src={accountable}
                        alt="Accountability"
                        width="28"
                        height="28"
                      />
                      &nbsp; Accountability
                    </ListGroup.Item>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={popover(
                      "I have an approachable demeanor that invites others in and makes them feel comfortable around me."
                    )}
                  >
                    <ListGroup.Item action>
                      <img
                        src={approachable}
                        alt="Approachability"
                        width="28"
                        height="28"
                      />
                      &nbsp; Approachability
                    </ListGroup.Item>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={popover(
                      "I enjoy celebrating the accomplishments of others and making them feel appreciated."
                    )}
                  >
                    <ListGroup.Item action>
                      <img
                        src={appreciation}
                        alt="Appreciation/Praise"
                        width="28"
                        height="28"
                      />
                      &nbsp; Appreciation/Praise
                    </ListGroup.Item>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={popover(
                      "I have experience supervising staff, including providing professional development opportunities, supporting them in their personal/professional lives, and ensuring they meet expectations."
                    )}
                  >
                    <ListGroup.Item action>
                      <MdSupervisorAccount size={28} />
                      &nbsp; Supervision
                    </ListGroup.Item>
                  </OverlayTrigger>
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
