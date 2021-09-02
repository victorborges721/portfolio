import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../ProjectCard";
import projects from "../../data/projects";
import "./style.css";

const Projects = () => {
  return (
    <section
      id="projectsSection"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <Container className="projects-container">
        <h2 className="section-header projects-header">&#60;Projects&#62;</h2>
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
        <h2 className="section-header projects-header">&#60;/Projects&#62;</h2>
      </Container>
    </section>
  );
};

export default Projects;
