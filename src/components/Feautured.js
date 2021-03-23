import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Basic from "../images/basic.png";
import General from "../images/general.png";
import Master from "../images/master.png";

export default function ProgramsSection() {
  return (
    <section className="feautured" id="feautured">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <p className="secondHero-text mt-5">Find a courses</p>
            <h2 className="secondHero-title">Feautured Courses</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="feauturedItems mt-2">
              <div className="feauturedItems-grid d-block d-md-flex justify-content-between">
                {feauturedContents.map((content, i) => (
                  <Card
                    className="feauturedItems-card text-center mt-5 pb-4 border-0"
                    key={i}
                  >
                    <div className="feauturedItems-img">
                      <img src={content.image} className="img-fluid" alt="" />
                    </div>
                    <div className="feauturedItems-content px-4">
                      <h6 className="mainSecond-text mt-4">{content.title}</h6>
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

const feauturedContents = [
  {
    image: Basic,
    title: "Free Mobile Application",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
  {
    image: General,
    title: "Free Teaching Video Material",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
  {
    image: Master,
    title: "An Easy Study Approach",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
];
