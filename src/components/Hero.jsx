import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import "../styles/hero.css";
import profilephoto from "../assets/profilephoto.jpg";
function Hero() {
  return (
    <section
      className="hero-section d-flex align-items-center text-white"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-info">Pankhil Patel</span>
            </h1>
            <h3 className="mb-3">
              <ReactTyped
                strings={[
                  "Frontend Developer",
                  "React Enthusiast",
                  "Java Coder",
                ]}
                typeSpeed={60}
                backSpeed={30}
                loop
              />
            </h3>
            <p className="lead">
              I design and develop responsive, user-friendly websites and apps.
            </p>
            <Button
              variant="info"
              size="lg"
              href="#contact"
              className="rounded-pill px-4 mt-3 hero-button"
            >
              Contact Me
            </Button>
          </Col>
          <Col md={6} className="text-center mt-5 mt-md-0">
            <div className="hero-image-wrapper">
              <img
                src={profilephoto}
                alt="Profile"
                className="hero-image rounded-circle shadow-lg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
