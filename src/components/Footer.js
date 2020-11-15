import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <section className="footer-area mt-5 pt-5 mb-5" id="footer">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h2>Our Logo</h2>
            <div className="social-media"></div>
            <div className="footer-link">
              <Link to="banner" spy={true} smooth={true}>
                Home
              </Link>
              <Link to="wish" spy={true} smooth={true}>
                Tentang
              </Link>
              <Link to="programs" spy={true} smooth={true}>
                Program
              </Link>
              <Link to="events" spy={true} smooth={true}>
                Events
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
