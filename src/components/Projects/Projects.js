import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../ProjectCard";
import projects from "../../data/projects";
import "./style.css";

const Projects = () => {
  return (
    <section
      id="projectsSection"
      style={{ backgroundColor: "#ffc9b9", minHeight: "75vh" }}
    >
      <Container>
        <h1>&#60;Projects&#62;</h1>
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
        <h1>&#60;/Projects&#62;</h1>
      </Container>
    </section>
  );
};

export default Projects;
