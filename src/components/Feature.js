import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import Case from "../images/case.svg";
import App from "../images/app.svg";
import Certificate from "../images/certificate.svg";

export default function Feature() {
  return (
    <section className="feature" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <h1 className="second-title">Our special features</h1>
            <p className="description px-md-5 mt-2">
              Join us and get various benefits with the facilities we provide,
              start developing your career in programming
            </p>
          </Col>
        </Row>
        <Row className="mt-md-4 justify-content-around">
          {featureContents.map((content, i) => (
            <Col md={4} className="feature-items mt-4 mt-lg-0" key={i}>
              <Card className="feature-card border-0 p-lg-4 p-3">
                <Card.Header className="border-0 bg-transparent">
                  <div className="feature-card-icon d-flex justify-content-center align-items-center">
                    <img src={content.image} alt={content.title} />
                  </div>
                </Card.Header>
                <Card.Body className="feature-items__content">
                  <h6 className="third-title">{content.title}</h6>
                  <p className="description mt-4">{content.body}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

const featureContents = [
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
    body: "Determine study hours as you wish, take featureage of the time and place that is most convenient for you",
  },
];
