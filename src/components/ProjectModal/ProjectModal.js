import React from "react";
import {
  Modal,
  Button,
  CloseButton,
  Container,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import "./style.css";

const ProjectModal = ({ openProjectModal, setOpenProjectModal, project }) => {
  return (
    <Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      show={openProjectModal}
      onHide={() => setOpenProjectModal(false)}
      centered
    >
      <Modal.Body>
        <Container>
          <Row>
            <Col
              xs={{ span: 12, order: "last" }}
              lg={{ span: 8, order: "first" }}
            >
              <div className="video-container">
                <img
                  src={project.project_gif_link}
                  alt="gif tutorial"
                  className="video"
                />
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: "first" }}
              lg={{ span: 4, order: "last" }}
              className="project-modal-info"
            >
              <CloseButton
                onClick={() => setOpenProjectModal(false)}
                style={{ alignSelf: "flex-end" }}
              />
              <h2>{project.project_name}</h2>
              <div className="project-modal-skills">
                {project.project_skills.map((skill, index) => {
                  return (
                    <Badge
                      key={index}
                      bg="dark"
                      className="project-modal-skill"
                    >
                      {skill}
                    </Badge>
                  );
                })}
              </div>
              <p>{project.project_desc}</p>
              <div className="project-modal-buttons">
                <Button
                  className="project-modal-button"
                  href={project.project_live_link}
                  target="_blank"
                >
                  <BsFillEyeFill /> &nbsp; Demo
                </Button>
                <Button
                  className="project-modal-button"
                  href={project.project_github_link}
                  target="_blank"
                >
                  <BiCodeAlt /> &nbsp; Code
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
