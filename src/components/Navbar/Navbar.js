import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./style.css";

const Navigationbar = () => {
  return (
    <Navbar style={{ backgroundColor: "#0081a7" }} expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navLink">&#60; About /&#62;</Nav.Link>
            <Nav.Link className="navLink">&#60; Projects /&#62;</Nav.Link>
            <Nav.Link className="navLink">&#60; Contact /&#62;</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
