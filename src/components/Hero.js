import React from "react";
import "slick-carousel/slick/slick.css";
import HeroPic from "../images/businessman.png";
import "../style/style.css";
import { Col, Button, Container, Row } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <Container>
          <Row>
            <Col lg={6} className="pr-0 pt-2 pt-md-5">
              <h1 className="main-title">
                Become a frontend Developer{" "}
                <span style={{ color: "#ff6e30" }}>in a cool </span>Away with
                us,
              </h1>
              <p className="sub-title mt-4 mt-md-5 mt-md-4 pr-2 pr-md-5  ">
                We provide a comfortable place to be a Frontend Developer, take
                your most comfortable place and join us, be a successful person
                from now!
              </p>
              <Button
                variant="light mt-4 px-4 py-2 rounded-lg"
                className="main-button"
              >
                Learn more
              </Button>
            </Col>
            <Col
              lg={6}
              className="d-none d-lg-block text-right pr-0 align-self-end"
            >
              <img src={HeroPic} alt="hero" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
