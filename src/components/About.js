import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import AboutPic from "../images/about-pic.png";

export default function About() {
  return (
    <section className="about" id="about">
      <Container>
        <div className="about-content">
          <Row className="align-items-center">
            <Col lg={7} className="text-center">
              <img
                src={AboutPic}
                alt="about"
                className="img-fluid rounded-lg ml-lg-n5"
              />
            </Col>
            <Col lg={5} className="mt-3 mt-md-5 text-left px-5 pb-4 pr-md-5">
              <h2 className="second-title text-white">
                What we will learn in this course?
              </h2>
              <p className="description text-white mt-3">
                We will learn to make a website starting from the UI-UX design
                using figma, to the coding stage using react and Tailwindcss
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
