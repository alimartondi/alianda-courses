import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "../style/style.css";

export default function RegisterSection() {
  return (
    <section className="register-area px-2 py-4 px-md-0" id="register">
      <Container className="register-content py-5">
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <h1 className="second-title text-white">
              Ready to Growup your carier?
            </h1>
            <p className="sub-title px-md-5">
              Learn directly from experienced mentors in his field indefinitely
            </p>
            <Button variant="main-button" className="mt-5">
              Join us now
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
