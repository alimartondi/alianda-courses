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
    <section className="footer-area pb-4 pt-3" id="footer">
      <Container>
        <Row>
          <Col
            lg={12}
            className="d-block d-md-flex text-center align-items-center justify-content-between"
          >
            <div className="footerSoc d-flex mt-3 justify-content-center justify-content-lg-end">
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
            <hr className="bg-white" />
            <p className="small">
              &copy; Alianda 2021 | Made With{" "}
              <span style={{ color: "red" }}>&#10084;</span>
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
