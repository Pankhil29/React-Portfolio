import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "../styles/skills.css";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import java from "../assets/java.png";
import c from "../assets/c.png";
import cpp from "../assets/c++logo.png";
import github from "../assets/github.png";

const combinedSkills = [
  {
    left: {
      name: "HTML",
      level: 90,
      icon: html,
    },
    right: { name: "CSS", level: 85, icon: css },
  },
  {
    left: { name: "Bootstrap", level: 80, icon: bootstrap },
    right: { name: "JavaScript", level: 75, icon: js },
  },
  {
    left: { name: "C", level: 90, icon: c },
    right: { name: "C++", level: 75, icon: cpp },
  },
  {
    left: { name: "Java", level: 80, icon: java },
    right: {
      name: "Github",
      level: 80,
      icon: github,
    },
  },
];

function Skills() {
  return (
    <section
      className="skills-bars-section py-5 bg-dark text-white"
      id="skills"
    >
      <Container>
        <h2 className="text-center fw-bold mb-5">My Skills</h2>
        {combinedSkills.map((row, index) => (
          <Row key={index} className="align-items-center mb-4">
            <Col md={6} className="pe-md-5">
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-semibold">{row.left.name}</span>
                <img
                  src={row.left.icon}
                  alt={row.left.name}
                  className="skill-icon"
                />
              </div>
              <ProgressBar now={row.left.level} className="custom-bar" />
            </Col>
            <Col md={6} className="ps-md-5">
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-semibold">{row.right.name}</span>
                <img
                  src={row.right.icon}
                  alt={row.right.name}
                  className="skill-icon"
                />
              </div>
              <ProgressBar now={row.right.level} className="custom-bar" />
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default Skills;
