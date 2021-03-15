import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Faq() {
  const [active, setActive] = useState({
    active: false,
  });

  const [isOpen, setOpen] = React.useState(true);

  // const toggleAccordion = () => {
  //   setActive(active === "" ? "active" : "");
  // };

  return (
    <section className="faq pb-5" id="faq">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={7} className="text-center">
            <p className="secondHero-text mt-5">Faq</p>
            <h2 className="secondHero-title">Our Professional Teams</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Accordion defaultActiveKey="0">
              {faqContents.map((content, i) => (
                <Card key={i} className="mt-3">
                  <Accordion.Toggle
                    as={Card.Header}
                    className={`accordionTitle d-flex justify-content-between ${
                      isOpen ? "active" : ""
                    }`}
                    eventKey={content.key}
                    onClick={() => setOpen(!isOpen)}
                  >
                    <h6 className="secondTitle-text">{content.title}</h6>
                  </Accordion.Toggle>
                  <Accordion.Collapse
                    className="accordionItem"
                    eventKey={content.key}
                  >
                    <Card.Body eventkey={content.key}>{content.body}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
            {/* <Accordion defaultActiveKey="0">
              {faqContents.map((content, index) => (
                <Card className="faq-card mt-3">
                  <Card.Header
                    className="d-flex justify-content-between align-items-top"
                    onClick={() => toggle(index)}
                    eventKey={content.key}
                  >
                    <h5>{content.title}</h5>
                    {open === index ? (
                      <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                    )}
                  </Card.Header>
                  {open === index ? (
                    <Card.Body eventKey={content.key}>
                      <h6>{content.body}</h6>
                    </Card.Body>
                  ) : null}
                </Card>
              ))}
            </Accordion> */}
            {/* <Accordion defaultActiveKey="0"> */}
            {/* {faqContents.map((content, i) => ( */}
            {/* <Card className="faq-card mt-3"> */}

            {/* <Accordion.Toggle
                    onClick={() => setCollapse()}
                    as={Card.Header}
                    className="d-flex justify-content-between"
                    eventKey={content.key}
                  >
                    <h6>{content.title}</h6>
                    {collapse ? (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        eventKey={content.key}
                      ></FontAwesomeIcon>
                    ) : (
                      ""
                    )}
                  </Accordion.Toggle> */}
            {/* <Accordion.Collapse eventKey={content.key}>
                  <Card.Body>{content.body}</Card.Body>
                </Accordion.Collapse> */}
            {/* </Card> */}
            {/* ))} */}
            {/* </Accordion> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const faqContents = [
  {
    key: "0",
    title: "Ada Apa",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate laboriosam sunt tempore nostrum dolor eius vitae, ad repudiandae nesciunt sed nam tenetur! Ea, nobis sapiente sit iste voluptates ullam?",
  },
  {
    key: "1",
    title: "Bagaimana Urusannye",
    body: "Lah, Mana gue tau",
  },
  {
    key: "2",
    title: "Masa Sih",
    body: "Yoi bro, gimane sih",
  },
];
