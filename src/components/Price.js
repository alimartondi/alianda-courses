import React from "react";
import { Button, Row, Col, Container, Card } from "react-bootstrap";

export default function PricingPlans() {
  return (
    <section className="price" id="price">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <h1 className="second-title">Pricing Plans</h1>
            <p className="sub-title mt-3 text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            lg={12}
            className="pricing-plans__items d-block d-md-flex text-center justify-content-lg-around px-5"
          >
            <div className="pricing-plans__grid">
              {pricingContents.map((content, i) => (
                <PriceCard
                  key={i}
                  title={content.title}
                  price={content.price}
                  benefit1={content.benefit1}
                  benefit2={content.benefit2}
                  benefit3={content.benefit3}
                  benefit4={content.benefit4}
                  benefit5={content.benefit5}
                  benefit6={content.benefit6}
                  benefit7={content.benefit7}
                />
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
    title: "Starter",
    price: "Free",
    benefit1: "Cost free",
    benefit2: "Limited class",
    benefit3: "Software Design & Code",
    benefit4: "Updated study material",
  },
  {
    title: "Enterprise Plan",
    price: "RP1.5B",
    benefit1: "Free access forever",
    benefit2: "Online & Offline",
    benefit3: "Pay only once",
    benefit4: "Unlimited class",
    benefit5: "Private group",
    benefit6: "Master design project",
    benefit7: "Certificate",
  },
  {
    title: "Ultimate Plan",
    price: "RP700K",
    benefit1: "Free for 1 year",
    benefit2: "Just Online",
    benefit3: "Certificate",
    benefit4: "Unlimited class",
    benefit5: "Private group",
  },
];

function PriceCard(props) {
  return (
    <Card className="pricing-card p-4 p-md-5 border-0">
      <div className="card-title third-title">{props.title}</div>
      <div className="card-body">
        <p className="cost">{props.price}</p>
        <p className="description">{props.benefit1}</p>
        <p className="description">{props.benefit2}</p>
        <p className="description">{props.benefit3}</p>
        <p className="description">{props.benefit4}</p>
        <p className="description">{props.benefit5}</p>
        <p className="description">{props.benefit6}</p>
        <p className="description">{props.benefit7}</p>
      </div>
    </Card>
  );
}
