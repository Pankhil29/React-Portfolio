import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/about.css";
import aboutphoto from "../assets/about.png";

function About() {
  return (
    <section className="about-section py-5 bg-light" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-up" data-aos-duration="1000">
            <img
              src={aboutphoto}
              alt="About"
              className="img-fluid rounded shadow about-image"
            />
          </Col>
          <Col
            md={6}
            className="mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
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
              <div
                className="stat me-4"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <h5 className="text-primary fw-bold">4+</h5>
                <p className="mb-0">Projects</p>
              </div>
              <div
                className="stat me-4"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <h5 className="text-primary fw-bold">2+</h5>
                <p className="mb-0">Years Learning</p>
              </div>
              <div className="stat" data-aos="zoom-in" data-aos-delay="900">
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
