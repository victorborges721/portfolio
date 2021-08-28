import React, { useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import ProjectModal from "../ProjectModal";
import "./style.css";

const ProjectCard = ({ project }) => {
  const [openProjectModal, setOpenProjectModal] = useState(false);

  return (
    <React.Fragment>
      <Card className="mb-3" style={{ width: "75%" }}>
        <Row>
          <Col md={6}>
            <Card.Img variant="top" src={project.project_screenshot} />
          </Col>
          <Col md={6} style={{ display: "flex", alignItems: "center" }}>
            <Card.Body>
              <Card.Title>{project.project_name}</Card.Title>
              <Card.Text>{project.project_desc}</Card.Text>
              <Button
                style={{ backgroundColor: "#000000" }}
                onClick={() => setOpenProjectModal(true)}
              >
                View Project
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      {openProjectModal && (
        <ProjectModal
          openProjectModal={openProjectModal}
          setOpenProjectModal={setOpenProjectModal}
          project={project}
        />
      )}
    </React.Fragment>
  );
};

export default ProjectCard;
