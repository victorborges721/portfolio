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
        minHeight: "75vh",
      }}
    >
      <Container style={{ color: "white !important" }}>
        <h2>&#60;Projects&#62;</h2>
        {/* <CardColumns> */}
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
        {/* </CardColumns> */}
        <h2>&#60;/Projects&#62;</h2>
      </Container>
    </section>
  );
};

export default Projects;
