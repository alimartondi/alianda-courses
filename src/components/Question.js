import React, { useState, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Faq() {
  const [active, setActive] = useState("");

  const [isOpen, setOpen] = React.useState(true);

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
            {faqContents.map((content, i) => (
              <Accordion
                key={i}
                title={content.title}
                content={content.body}
              ></Accordion>
            ))}
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
    body:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo dolor quibusdam atque est dicta impedit perspiciatis, possimus deleniti odio?",
  },
  {
    key: "2",
    title: "Masa Sih",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, numquam fugiat. Nesciunt quas, consequatur, sequi blanditiis odit voluptas nobis iusto placeat saepe incidunt molestiae quae illo. Dolor ab error voluptatibus?",
  },
];

function Accordion(props) {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");

    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  };

  return (
    <div className="accordion__section">
      <div
        className={`accordion d-flex justify-content-between w-100 align-items-center p-3 ${active}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title mb-0">{props.title}</p>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={active ? "rotate" : ""}
        ></FontAwesomeIcon>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text pb-3 pt-2"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}
