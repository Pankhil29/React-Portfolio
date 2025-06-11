import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/contact.css";

function Contact() {
  return (
    <section
      className="contact-section py-5 bg-dark text-white"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="400"
    >
      <Container>
        <h2 className="text-center fw-bold mb-5">Get in Touch</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type your message...."
                  required
                />
              </Form.Group>
              <Button
                variant="info"
                type="submit"
                className="rounded-pill px-4"
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
