import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer py-5 mt-3" id="footer">
      <Container>
        <Row>
          <Col lg={12}>
            <hr className="mb-4" />
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            className="d-block d-md-flex align-items-center justify-content-between"
          >
            <div className="social d-flex justify-content-center justify-content-lg-end">
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.youtube.com/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="small text-center mt-3 mt-md-0">
              &copy; Alianda 2021 | Made With{" "}
              <span style={{ color: "red" }}>&#10084;</span>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
