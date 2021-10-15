import React from "react";
import HeroPic from "../images/businessman.png";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/style.css";
import { Col, Button, Container, Row } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <Container>
        <Row className="align-items-center pt-6 pt-lg-8 pb-5">
          <Col lg={6} className="text-lg-left order-2 mt-5 mt-lg-0 order-lg-1">
            <h1 className="main-title">
              Best way
              <br /> To become a Programmer.
            </h1>
            <p className="sub-title mt-4 mt-md-5 mt-md-4 pr-2 pr-md-5  ">
              We provide a comfortable place to learn programming. Courses
              designed by experts with real-world practice.
              <br />
              Join our global community. It's free.
            </p>
            <div className="d-flex mt-5">
              <Button variant="main-button rounded-pill mr-1 mr-md-2">
                Get started
              </Button>
              <Button variant="second-button rounded-pill">
                <FontAwesomeIcon icon={faPlay} className="mr-2" />
                Play video
              </Button>
            </div>
          </Col>
          <Col lg={6} className="order-1 order-lg-2">
            <img src={HeroPic} alt="hero" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
