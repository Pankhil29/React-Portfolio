import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/projects.css";
import calculator from "../assets/calculator.png";
import tictactoe from "../assets/tictactoe.png";
import numberpuzzle from "../assets/numberpuzzle.png";
import blog from "../assets/blog.png";
import shoppingkart from "../assets/eco.png";

const projects = [
  {
    title: "React Calculator",
    description: "A simple calculator app build using React.",
    img: calculator,
    github: "https://github.com/Pankhil29/React-Calculator",
    demo: "https://pankhil29.github.io/React-Calculator/",
  },
  {
    title: "Tic Tac Toe",
    description: "Classic 2-player game using HTML, CSS & JS.",
    img: tictactoe,
    github: "https://github.com/Pankhil29/TIC-TAC-TOE-GAME",
    demo: "https://pankhil29.github.io/TIC-TAC-TOE-GAME/",
  },
  {
    title: "Number Puzzle Game",
    description: "Number puzzle using Js logic",
    img: numberpuzzle,
    github: "https://github.com/Pankhil29/Number-Puzzle-Game",
    demo: " https://pankhil29.github.io/Number-Puzzle-Game/",
  },
  {
    title: "Blog App",
    description: "A simple blog application built with Django.",
    img: blog,
    github: "https://github.com/Pankhil29/django-blog",
    demo: "https://django-blog-8swb.onrender.com/",
  },
  {
    title: "E-commerce Website",
    description: "E-commerce website built with Django.",
    img: shoppingkart,
    github: "https://github.com/Pankhil29/ShoppingKart-django",
    demo: "https://shoppingkart-django.onrender.com/",
  },
];

function Projects() {
  return (
    <section className="projects-section py-5 bg-light" id="projects">
      <Container>
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
          My Projects
        </h2>

        <Row>
          {projects.map((project, index) => (
            <Col
              md={4}
              sm={6}
              className="mb-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Card className="project-card h-100 shadow-sm">
                <div className="overflow-hidden">
                  {" "}
                  <Card.Img
                    variant="top"
                    src={project.img}
                    className="project-img-top"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between mt-3">
                    <Button
                      variant="outline-primary"
                      href={project.github}
                      target="_blank"
                      className="rounded-pill px-3"
                    >
                      Github
                    </Button>
                    <Button
                      variant="primary"
                      href={project.demo}
                      target="_blank"
                      className="rounded-pill px-3"
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
