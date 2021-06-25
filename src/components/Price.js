import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
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
    benefit1: {
      icon: faCheckCircle,
      content: "Cost free",
    },
    benefit2: {
      icon: faCheckCircle,
      content: "Limited accsess",
    },
    benefit3: {
      icon: faCheckCircle,
      content: "Software design & code",
    },
    benefit4: {
      icon: faCheckCircle,
      content: "Updated study material",
    },
  },
  {
    title: "Enterprise Plan",
    price: "RP1.5B",
    benefit1: {
      icon: faCheckCircle,
      content: "Free accsess forever",
    },
    benefit2: {
      icon: faCheckCircle,
      content: "Online & Offline",
    },
    benefit3: {
      icon: faCheckCircle,
      content: "Pay only once",
    },
    benefit4: {
      icon: faCheckCircle,
      content: "Unlimited class",
    },
    benefit5: {
      icon: faCheckCircle,
      content: "Private group",
    },
    benefit6: {
      icon: faCheckCircle,
      content: "Master design project",
    },
    benefit7: {
      icon: faCheckCircle,
      content: "Certificate",
    },
  },
  {
    title: "Ultimate Plan",
    price: "RP700K",
    benefit1: {
      icon: faCheckCircle,
      content: "Free for 1 year",
    },
    benefit2: {
      icon: faCheckCircle,
      content: "Online only",
    },
    benefit3: {
      icon: faCheckCircle,
      content: "Certificate",
    },
    benefit4: {
      icon: faCheckCircle,
      content: "Unlimited class",
    },
    benefit5: {
      icon: faCheckCircle,
      content: "Private group",
    },
  },
];

function PriceCard(props) {
  return (
    <Card className="pricing-card py-5 px-4 border-0">
      <h3 className="card-title third-title">{props.title}</h3>
      <h5 className="cost text-center">{props.price}</h5>
      <div className="card-body text-left">
        <p className="description mb-2">{props.benefit1.content}</p>
        <p className="description mb-2">{props.benefit2.content}</p>
        <p className="description mb-2">{props.benefit3.content}</p>
        <p className="description mb-2">{props.benefit4.content}</p>
        {/* <p className="description">{props.benefit5.content}</p> */}
        {/* <p className="description">
          <FontAwesomeIcon className="mr-3" icon={props.benefit6.icon} />
          {props.benefit6.content}
        </p>
        <p className="description">
          <FontAwesomeIcon className="mr-3" icon={props.benefit7.icon} />
          {props.benefit7.content}
        </p> */}
        <Button variant="second-button" className="mt-5 w-100">
          Select plan
        </Button>
      </div>
    </Card>
  );
}
