import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/projects.css";

const projects = [
  {
    title: "React Calculator",
    description: "A simple calculator app build using React.",
    img: "https://via.placeholder.com/300x200",
    github: "https://github.com/yourusername/calculator",
    demo: "https://yourdemo.com/calculator",
  },
  {
    title: "Tic Tac Toe",
    description: "Classic 2-player game using HTML, CSS & JS.",
    img: "https://via.placeholder.com/300x200",
    github: "https://github.com/yourusername/tictactoe",
    demo: "https://yourdemo.com/tictactoe",
  },
  {
    title: "Restaurant Website",
    description: "Responsive food site UI built with Bootstrap.",
    img: "https://via.placeholder.com/300x200",
    github: "https://github.com/yourusername/restaurant",
    demo: "https://yourdemo.com/restaurant",
  },
];

function Projects() {
  return (
    <section
      className="projects-section py-5 bg-light"
      id="projects"
      data-aos="fade-up"
      data-aos-duration="1300"
      data-aos-delay="300"
    >
      <Container>
        <h2 className="text-center fw-bold mb-5">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="project-card h-100">
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-primary"
                      href={project.github}
                      target="_blank"
                      className="btn"
                    >
                      Github
                    </Button>
                    <Button
                      variant="primary"
                      href={project.demo}
                      target="_blank"
                      className="btn"
                    >
                      Live Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
