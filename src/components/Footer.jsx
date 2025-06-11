import React from "react";
import { Container } from "react-bootstrap";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer-section bg-dark text-white py-3">
      <Container className="text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Pankhil Patel. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
