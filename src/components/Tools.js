import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoursesApp from "../images/courses-app.png";

export default function Tools() {
  return (
    <section className="tools">
      <Container>
        <Row className="text-center">
          <Col lg={6}>
            <h1 className="second-title">
              Now you can access All study material on Your phone
            </h1>
            <p className="sub-title mt-3 text-dark">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque, dicta!
            </p>
          </Col>
          <Col lg={6}>
            <img src={CoursesApp} alt="courses-app" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
