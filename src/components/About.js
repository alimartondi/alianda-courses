import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import AboutPic from "../images/about-pic.png";

export default function About() {
  return (
    <section className="about" id="about">
      <Container className="about-content">
        <Row className="align-items-center">
          <Col lg={7} className="text-center">
            <img src={AboutPic} alt="about" className="img-fluid" />
          </Col>
          <Col lg={5} className="mt-3 mt-md-5 text-left px-3">
            <h2 className="second-title mb-4">
              Help make your dreams come true
            </h2>
            <p className="description">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </p>
            <Button variant="main-button rounded-pill mt-4">Learn more</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
