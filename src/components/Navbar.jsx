import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import "../styles/navbar.css";

function Navbar({ activeSection, setActiveSection }) {
  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <BootstrapNavbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <i className="fas fa-code me-2"></i>
          Pankhil Patel
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controlls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => handleClick("home")}
              className={activeSection === "home" ? "active-link" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => handleClick("about")}
              className={activeSection === "about" ? "active-link" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => handleClick("skills")}
              className={activeSection === "skills" ? "active-link" : ""}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => handleClick("projects")}
              className={activeSection === "projects" ? "active-link" : ""}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => handleClick("contact")}
              className={activeSection === "contact" ? "active-link" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
