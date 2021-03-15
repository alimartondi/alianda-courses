import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

export default function PricingPlans() {
  return (
    <section className="pricingPlans" id="price">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <p className="secondHero-text mt-5">Choose a Plan</p>
            <h1 className="secondHero-title">Pricing Plans</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col
            lg={12}
            className="pricingPlans-items d-block d-md-flex text-center justify-content-lg-around px-5"
          >
            <div className="pricingPlans-grid">
              {pricingContents.map((content, i) => (
                <div className="pricingPlans-card mt-3 mr-5" key={i}>
                  <h6 className="mainSecond-text">{content.title}</h6>
                  <p>{content.subtitle}</p>
                  <p>{content.price}</p>
                  <p className="description mt-5">{content.body}</p>
                  <Button variant="info mt-3 w-75">Select Plan</Button>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const pricingContents = [
  {
    title: "Basic Plan",
    subtitle: "Lorem Ipsum",
    price: "350000",
    body:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt ad inventore, sequi esse impedit odio eius.",
  },
  {
    title: "Pro Plan",
    subtitle: "Lorem Ipsum",
    price: "350000",
    body:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt ad inventore, sequi esse impedit odio eius.",
  },
  {
    title: "Premium Plan",
    subtitle: "Lorem Ipsum",
    price: "350000",
    body:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur incidunt ad inventore, sequi esse impedit odio eius.",
  },
];
