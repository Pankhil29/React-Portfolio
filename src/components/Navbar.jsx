import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import "../styles/navbar.css";
function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    //   <div className="container">
    //     <a className="navbar-brand fw-bold" href="#home">
    //       <i className="fas fa-code me-2"></i>MyPortfolio
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <a className="nav-link" href="#home">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#about">
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#skills">
    //             Skills
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#projects">
    //             Projects
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#contact">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <BootstrapNavbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          <i className="fas fa-code me-2"></i>MyPortfolio
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controlls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
