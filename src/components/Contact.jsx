import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-section py-5 bg-dark text-white" id="contact">
      <Container>
        {/* Title ko alag se animate karein */}
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
          Get in Touch
        </h2>

        <Row className="justify-content-center">
          <Col md={8} data-aos="zoom-in" data-aos-delay="200">
            <Form className="contact-form p-4 rounded shadow-lg  text-dark">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="py-2"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="py-2"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type your message...."
                  required
                  className="py-2"
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  variant="info"
                  type="submit"
                  className="rounded-pill px-5 py-2 fw-bold hero-button"
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
