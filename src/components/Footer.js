import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <section className="footer-area pb-5" id="footer">
      <Container>
        <Row>
          <Col lg={12} className="footer-items text-center">
            <h2>Our Logo</h2>
            <div className="social-media d-flex justify-content-center mt-3">
              <a href="/" className="footer-social-media">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/" className="footer-social-media ml-4">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="/" className="footer-social-media ml-4">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </div>
            <div className="footer-link mt-3 ">
              <Link to="banner" spy={true} smooth={true} activeClass="none">
                Home
              </Link>
              <Link to="wish" spy={true} smooth={true}>
                Wish 3.0
              </Link>
              <Link to="programs" spy={true} smooth={true} activeClass="active">
                Program
              </Link>
              <Link to="events" spy={true} smooth={true}>
                Events
              </Link>
            </div>
            <hr />
            <h5 className="copyright-intro text-center text-xl-left">
              &#169;2020| Indonesia Scholarship Center
            </h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
