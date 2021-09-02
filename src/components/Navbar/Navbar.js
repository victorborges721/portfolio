import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../images/V.png";
import { IconContext } from "react-icons";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import "./style.css";

const Navigationbar = ({ scrollToSection }) => {
  return (
    <Navbar
      style={{ backgroundColor: "#000000", borderBottom: "1px solid white" }}
      expand="lg"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }}>
            <div className="navbar-links mx-4">
              <Nav.Link
                className="navLink grow"
                onClick={() => scrollToSection("aboutSection")}
              >
                &#60;About /&#62;
              </Nav.Link>
              <Nav.Link
                className="navLink grow"
                onClick={() => scrollToSection("skillsSection")}
              >
                &#60;Skills /&#62;
              </Nav.Link>
              <Nav.Link
                className="navLink grow"
                onClick={() => scrollToSection("projectsSection")}
              >
                &#60;Projects /&#62;
              </Nav.Link>
              <Nav.Link
                className="navLink grow"
                onClick={() => scrollToSection("contactSection")}
              >
                &#60;Contact /&#62;
              </Nav.Link>
            </div>
            <div className="navbar-logo mx-auto">
              <img src={logo} alt="Victor Borges logo" />
            </div>
            <div className="navbar-social mx-auto">
              <Nav.Link
                className="navLink grow"
                href="https://github.com/victorborges721"
                target="_blank"
              >
                <IconContext.Provider
                  value={{ size: "1.6rem", style: { verticalAlign: "middle" } }}
                >
                  <AiFillGithub />
                </IconContext.Provider>
              </Nav.Link>
              <Nav.Link
                className="navLink grow"
                href="https://www.linkedin.com/in/victormborges/"
                target="_blank"
              >
                <IconContext.Provider
                  value={{ size: "1.6rem", verticalAlign: "middle" }}
                >
                  <AiOutlineLinkedin />
                </IconContext.Provider>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
