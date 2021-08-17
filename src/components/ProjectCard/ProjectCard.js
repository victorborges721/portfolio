import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import ProjectModal from "../ProjectModal";
import "./style.css";

const ProjectCard = ({ project }) => {
  const [openProjectModal, setOpenProjectModal] = useState(false);
  return (
    <React.Fragment>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{project.project_name}</Card.Title>
          <Card.Text>{project.project_desc}</Card.Text>
          <Button variant="primary" onClick={() => setOpenProjectModal(true)}>
            View Project
          </Button>
        </Card.Body>
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
