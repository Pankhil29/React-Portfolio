import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/about.css";

function About() {
  return (
    <section
      className="about-section py-5 bg-light"
      id="about"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
              alt="About"
              className="img-fluid rounded shadow about-image"
            />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h2 className="fw-bold mb-4">About Me</h2>
            <p>
              I'm a passionate frontend developer with a strong foundation in
              Java, C++, and modern web technologies like HTML, CSS, Bootstrap,
              and React. I love building sleek and user-friendly websites.
            </p>
            <p>
              With a keen eye for design and attention to detail, I aim to
              deliver responsive and engaging web experiences that leave an
              impact.
            </p>
            <div className="about-stats d-flex flex-wrap mt-4">
              <div className="stat me-4">
                <h5 className="text-primary fw-bold">4+</h5>
                <p className="mb-0">Projects</p>
              </div>
              <div className="stat me-4">
                <h5 className="text-primary fw-bold">2+</h5>
                <p className="mb-0">Years Learning</p>
              </div>
              <div className="stat ">
                <h5 className="text-primary fw-bold">100%</h5>
                <p className="mb-0">Dedication</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
