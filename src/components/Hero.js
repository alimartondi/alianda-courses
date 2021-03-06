import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Businessman from "../images/businessman.png";
import Background from "../images/shape-background.svg";
import "../style/style.css";
import { Col, Button, Container, Row } from "react-bootstrap";

export default function mainHero() {
  return (
    <main className="mainHero" id="main">
      <div className="mainHero-content">
        <Container>
          <Row>
            <Col lg={6} className="">
              <p className="mainHero-text mt-5">Do you know?</p>
              <h1 class="mainHero-title">
                Millions People Have Joined, Now It's Your Turn,
              </h1>
              <p className="mainHero-text mt-4">
                Start learning English, and grow up your business to an
                international scene now..!
              </p>
              <Button variant="light mt-5 rounded-lg ">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}
