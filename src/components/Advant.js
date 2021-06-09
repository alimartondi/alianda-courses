import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import Case from "../images/case.svg";
import Mobile from "../images/mobile.svg";
import Work from "../images/work.svg";

export default function Advantages() {
  return (
    <section className="advantages" id="advant">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg={7} className="text-center">
            <h1 className="secondHero-title">Why should you choose us?</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="advant-items">
              <div className="advant-items__grid">
                {advantContents.map((content, i) => (
                  <Card className="advant-items__card border-0" key={i}>
                    <div className="advant-items-img">
                      <img src={content.image} alt="" />
                    </div>
                    <div className="advant-items__content">
                      <h6 className="third-title mt-4">{content.title}</h6>
                      <p className="description mt-4">{content.body}</p>
                    </div>
                  </Card>
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
    image: Case,
    title: "Learn With a Case Studies",
    body: `In this course, after learning
    the basics of programming, we
    will also study with case studies as the final goal`,
  },
  {
    image: Mobile,
    title: "Free Mobile Application",
    body: "We know it's hard for you to leave your smartphone, so we provide a place to study that is easy for you to reach",
  },
  {
    image: Work,
    title: "Flexible Learning Time",
    body: "Determine study hours as you wish, take advantage of the time and place that is most convenient for you",
  },
];
