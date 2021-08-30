import React from "react";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
import ProjectCard from "../ProjectCard";
import projects from "../../data/projects";
import "./style.css";

const Projects = () => {
  return (
    <section
      id="projectsSection"
      style={{
        backgroundColor: "#e5e5e5",
      }}
    >
      <Container>
        <h2 className="section-header">&#60;Projects&#62;</h2>
        {/* <CardColumns> */}
        <Container className="projects-container">
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </Container>
        {/* </CardColumns> */}
        <h2 className="section-header">&#60;/Projects&#62;</h2>
      </Container>
    </section>
  );
};

export default Projects;
