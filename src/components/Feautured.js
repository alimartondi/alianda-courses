import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import Case from "../images/case.svg";
import App from "../images/mobile-app.svg";
import Certificate from "../images/certificate.svg";

export default function Feautured() {
  return (
    <section className="feautured" id="feautured">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <h1 className="second-title">Why should you choose us?</h1>
            <p className="mt-2">
              Join us and get various benefits with the facilities we provide,
              start developing your career in programming
            </p>
          </Col>
        </Row>
        <Row className="mt-md-4 justify-content-around px-lg-2 text-center">
          {feauturedContents.map((content, i) => (
            <Col md={4} className="feautured-items mt-4 mt-lg-0" key={i}>
              <Card className="feautured-card border-0 p-lg-5 p-4">
                <div className="feautured-card__img">
                  <img src={content.image} alt="" className="img-fluid" />
                </div>
                <div className="feautured-items__content">
                  <h6 className="third-title mt-4 mt-md-5">{content.title}</h6>
                  <p className="description mt-4">{content.body}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

const feauturedContents = [
  {
    image: Case,
    title: "Case Studies",
    body: `In this course, after learning
    the basics of programming, we
    will also study with case studies as the final goal`,
  },
  {
    image: App,
    title: "Mobile App",
    body: "We know it's hard for you to leave your smartphone, so we provide a place to study that is easy for you to reach",
  },
  {
    image: Certificate,
    title: "Certificate",
    body: "Determine study hours as you wish, take feauturedage of the time and place that is most convenient for you",
  },
];
