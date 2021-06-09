import React from "react";
import "slick-carousel/slick/slick.css";
import Hero from "../images/businessman.png";
import "../style/style.css";
import { Col, Button, Container, Row } from "react-bootstrap";

export default function mainHero() {
  return (
    <main className="main-hero" id="main">
      <div className="main-hero__content">
        <Container>
          <Row>
            <Col lg={5} className="pr-4 pt-2 pt-md-5">
              <p className="mainHero-text mt-5">Do you know?</p>
              <h1 className="mainHero-title">
                Millions people
                <br /> Have joined, now <br />
                It's your turn,
              </h1>
              <p className="mainHero-text mt-4">
                We provide a comfortable place to learn programming, take your
                most comfortable place and join us, be a successful person from
                now!
              </p>
              <Button
                variant="light mt-5 px-4 py-2 rounded-lg"
                className="main-button"
              >
                Learn More
              </Button>
            </Col>
            <Col lg={7} className="d-none d-lg-block text-right pr-0">
              <img src={Hero} alt="hero" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}
