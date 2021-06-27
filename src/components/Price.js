import React from "react";
import { Button, Row, Col, Container, Card } from "react-bootstrap";

export default function PricingPlans() {
  return (
    <section className="price" id="price">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <h1 className="second-title">Our pricing Plans</h1>
            <p className="sub-title mt-3 text-dark">
              Some of the class prices we offer, make your choice, achieve your
              dream
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            lg={12}
            className="pricing-items d-block d-md-flex text-center justify-content-lg-around pl-3"
          >
            <div className="pricing-items__grid">
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
    title: "Starter Plan",
    price: "Free",
    benefit1: "Cost free",
    benefit2: "Limited accsess",
    benefit3: "Software design & code",
    benefit4: "Updated study material",
  },
  {
    title: "Enterprise Plan",
    price: "RP1.5B",
    benefit1: "Free accsess forever",
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
    benefit2: "Online only",
    benefit3: "Certificate",
    benefit4: "Unlimited class",
    benefit5: "Private group",
  },
];

function PriceCard(props) {
  return (
    <Card className="pricing-card py-5 px-4 border-0">
      <h3 className="card-title third-title">{props.title}</h3>
      <h5 className="cost text-center">{props.price}</h5>
      <div className="card-body text-left">
        <p className="description mb-2">{props.benefit1}</p>
        <p className="description mb-2">{props.benefit2}</p>
        <p className="description mb-2">{props.benefit3}</p>
        <p className="description mb-2">{props.benefit4}</p>
        <p className="description mb-2">{props.benefit5}</p>
        <p className="description mb-2">{props.benefit6}</p>
        <p className="description mb-2">{props.benefit7}</p>
        <Button variant="main-button" className="mt-5 w-100">
          Select plan
        </Button>
      </div>
    </Card>
  );
}
