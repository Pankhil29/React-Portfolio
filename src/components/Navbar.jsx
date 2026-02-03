import React, { useState } from "react"; // useState add kiya
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import "../styles/navbar.css";

function Navbar({ activeSection, setActiveSection }) {
  // Mobile menu expand state handle karne ke liye
  const [expanded, setExpanded] = useState(false);

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    setExpanded(false); // Link click hote hi menu band ho jayega

    const element = document.getElementById(sectionId);
    if (element) {
      // Navbar height (80px) ko offset karne ke liye manual scroll
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <BootstrapNavbar
      expanded={expanded} // State bind ki
      onToggle={setExpanded} // Toggle handle kiya
      expand="lg"
      fixed="top"
      className="custom-navbar" // Custom class for gradient
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" onClick={() => handleClick("home")}>
          <i className="fas fa-code me-2"></i>
          Pankhil Patel
        </BootstrapNavbar.Brand>

        {/* Typo fixed: aria-controls */}
        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />

        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {["home", "about", "skills", "projects", "contact"].map((sec) => (
              <Nav.Link
                key={sec}
                onClick={() => handleClick(sec)}
                className={activeSection === sec ? "active-link" : ""}
                style={{ textTransform: "capitalize" }}
              >
                {sec}
              </Nav.Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
