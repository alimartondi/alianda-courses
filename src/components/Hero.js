import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Hero from "../images/businessman.png";
import Background from "../images/shape-background.svg";
import "../style/style.css";
import { Col, Button, Container, Row } from "react-bootstrap";

export default function mainHero() {
  return (
    <main className="mainHero" id="main">
      <div className="mainHero-content">
        <Container>
          <Row>
            <Col lg={5} className="pr-4 pt-2 pt-md-5">
              <p className="mainHero-text mt-5">Do you know?</p>
              <h1 className="mainHero-title">
                Millions People
                <br /> Have Joined, Now <br />
                It's Your Turn,
              </h1>
              <p className="mainHero-text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odio
                omnis, tempora inventore ipsa eveniet fuga, qui sequi
                perferendis explicabo.
              </p>
              <Button
                variant="light mt-5 px-4 py-2 rounded-lg"
                className="main-button"
              >
                Learn More
              </Button>
            </Col>
            <Col lg={7} className="d-none d-lg-block text-right pr-0">
              <img src={Hero} alt="hero-image" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}
