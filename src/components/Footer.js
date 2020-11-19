import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import LandMark from "../images/font3.0.png";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <section className="footer-area" id="footer">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <div className="footer-items">
              <h2 className="second-title">Contact Us</h2>
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
              <hr />
              <h5 className="copyright-intro text-center text-xl-left">
                &#169;2020| Indonesia Scholarship Center
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
