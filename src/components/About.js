import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Programs from "../images/programs.png";
import Teacher from "../images/teacher.png";
import Student from "../images/student.png";

export default function About() {
  return (
    <section className="aboutUs" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center mt-3">
            <p className="secondHero-text mt-5">About Us</p>
            <h1 className="secondHero-title">Do you know about us?</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            className="aboutItems d-block d-md-flex justify-content-around mt-4"
          >
            {aboutContents.map((content, i) => (
              <div className="aboutItems-card text-center" key={i}>
                <div className="aboutItems-icon">
                  <img src={content.icon} alt="" />
                </div>
                <div className="aboutItems-amount">
                  <h6 className="amountText mt-3">{content.amount}</h6>
                  <p className="secondHero-title">{content.title}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const aboutContents = [
  {
    icon: Programs,
    amount: "12",
    title: "Programs",
  },
  {
    icon: Teacher,
    amount: "28",
    title: "Teacher",
  },
  {
    icon: Student,
    amount: "250",
    title: "Students",
  },
];
