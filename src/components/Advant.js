import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Smartphone from "../images/phone.svg";
import Material from "../images/material.svg";
import Idea from "../images/idea.svg";
import Badge from "../images/badge.svg";

export default function Advantages() {
  return (
    <section className="advantages" id="advant">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <p className="secondHero-text mt-5">Start Now</p>
            <h1 className="secondHero-title">Why should you choose us?</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="advantItems">
              <div className="advantItems-grid">
                {advantContents.map((content, i) => (
                  <div className="advantItems-card" key={i}>
                    <div className="advantItems-img">
                      <img src={content.image} alt="" />
                    </div>
                    <div className="advantItems-content">
                      <h6 className="mainSecond-text mt-4">{content.title}</h6>
                      <p className="description mt-4">{content.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="advantItems mt-4">
              <div className="advantItems-grid">
                {advantContents.map((content, i) => (
                  <div className="advantItems-card" key={i}>
                    <div className="advantItems-img">
                      <img src={content.image} alt="" />
                    </div>
                    <div className="advantItems-content">
                      <h6 className="mainSecond-text mt-4">{content.title}</h6>
                      <p className="description mt-4">{content.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const advantContents = [
  {
    image: Smartphone,
    title: "Free Mobile Application",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
  {
    image: Material,
    title: "Free Teaching Video Material",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
  {
    image: Idea,
    title: "An Easy Study Approach",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
];
