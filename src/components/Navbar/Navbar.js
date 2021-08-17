import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./style.css";

const Navigationbar = ({ scrollToSection }) => {
  return (
    <Navbar style={{ backgroundColor: "#2c6e49" }} expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="navLink"
              onClick={() => scrollToSection("aboutSection")}
            >
              &#60;About /&#62;
            </Nav.Link>
            <Nav.Link
              className="navLink"
              onClick={() => scrollToSection("projectsSection")}
            >
              &#60;Projects /&#62;
            </Nav.Link>
            <Nav.Link
              className="navLink"
              onClick={() => scrollToSection("contactSection")}
            >
              &#60;Contact /&#62;
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
