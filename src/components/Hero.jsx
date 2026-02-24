import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/hero.css";
import profilephoto from "../assets/profilephoto.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center text-white"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <div data-aos="fade-up" data-aos-delay="100">
              <h1 className="display-4 mb-3">
                Hi, I'm <span className="text-info">Pankhil Patel</span>
              </h1>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="mb-3">
                B<span className="text-info">a</span>ckend Develop
                <span className="text-info">e</span>r
              </h3>
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <p className="lead">
                I design and develop responsive, user-friendly websites and
                apps.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="700">
              <Button
                variant="info"
                size="lg"
                href="#contact"
                className="rounded-pill px-4 mt-3 hero-button"
              >
                Contact Me
              </Button>
            </div>
          </Col>

          <Col md={6} className="text-center mt-5 mt-md-0">
            <div
              className="hero-image-wrapper"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
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
