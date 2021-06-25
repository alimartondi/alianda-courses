import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "../style/style.css";
import Appstore from "../images/appstore.svg";
import Playstore from "../images/playstore.svg";

export default function RegisterSection() {
  return (
    <section className="register-area" id="register">
      <Container className="register-content py-5">
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="main-title">Ready to Growup your carier?</h1>
            <p className="sub-title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique dolor voluptas aperiam vitae quae nulla?
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
