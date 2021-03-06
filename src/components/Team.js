import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeamsA from "../images/teams-a.png";
import TeamsB from "../images/teams-b.png";
import TeamsC from "../images/teams-c.png";

export default function Teams() {
  return (
    <section className="teams" id="teams">
      <Container>
        <Row className="mt-5">
          <Col lg={7} className="text-center">
            <p className="secondHero-text mt-5">Meet Teams</p>
            <h2 className="secondHero-title">Our Professional Teams</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            {teamsContents.map((content, i) => (
              <div className="teamsCard text-center px-2" key={i}>
                <div className="teamsCard-img">
                  <img src={content.image} alt="" />
                </div>
                <div className="teamsCard-content">
                  <h6 className="secondMain-text mt-3">{content.name}</h6>
                  <p>{content.position}</p>
                  <p>{content.body}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const teamsContents = [
  {
    image: TeamsA,
    name: "Free Mobile Application",
    position: "Head Office",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
  {
    image: TeamsB,
    name: "Free Mobile Application",
    position: "Head Office",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
  {
    image: TeamsC,
    name: "Free Mobile Application",
    position: "Head Office",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excorporis dolores labore? Unde, quaerat deleniti.",
  },
];
