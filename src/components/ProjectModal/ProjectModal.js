import React from "react";
import {
  Modal,
  Button,
  CloseButton,
  Container,
  Row,
  Col,
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
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {project.project_name}
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <div className="video-container">
                <iframe
                  className="video"
                  src="https://www.youtube.com/embed/us4p9-AKtb8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
            <Col xs={12} md={4} className="project-modal-info">
              <CloseButton
                onClick={() => setOpenProjectModal(false)}
                style={{ alignSelf: "flex-end" }}
              />
              <h2>{project.project_name}</h2>
              <p>{project.project_desc}</p>
              <div className="project-modal-buttons">
                <Button
                  className="project-modal-button"
                  href={project.project_live_link}
                  target="_blank"
                >
                  <BsFillEyeFill />
                  Demo
                </Button>
                <Button
                  className="project-modal-button"
                  href={project.project_github_link}
                  target="_blank"
                >
                  <BiCodeAlt /> Code
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={() => setOpenProjectModal(false)}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ProjectModal;
