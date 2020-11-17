import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Expo from "../images/expo.png";
import PublicSpeaking from "../images/ngobrolpublic.png";
import Forumbeasiswa from "../images/forumbeasiswa.png";
import Supermentor from "../images/supermentor.png";
import Workshop from "../images/workshop.png";
import Scholarship from "../images/scholarship.png";
import Inspiring from "../images/inspiring.png";

export default function ProgramsSection() {
  return (
    <section className="programs-area" id="programs">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="second-title mt-5">Program</h1>
            <p className="description mt-3">
              10 + Acara Beasiswa di 15 Kota di Indonesia
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="programs-items d-flex">
            <div className="programs-items-grid">
              {programsContents.map((content, i) => (
                <div className="programs-card mt-5" key={i}>
                  <div className="card-img p-0">
                    <img src={content.image} alt={content.alt} />
                  </div>
                  <div className="card-body">
                    <p className="description">{content.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const programsContents = [
  {
    image: Inspiring,
    alt: "WISH inspairing",
    body: "WISH Inspiring Talk",
  },
  {
    image: Expo,
    alt: "Scholarship expo",
    body: "Education & Scholarship Expo",
  },
  {
    image: Forumbeasiswa,
    alt: "Forum beasiswa",
    body: "Forum Beasiswa",
  },
  {
    image: Scholarship,
    alt: "Scholarship competition",
    body: "Scholarship Competition (Program Bantuan Pendidikan SDM Daerah)",
  },
  {
    image: PublicSpeaking,
    alt: "Public speaking",
    body: "Ngobrol Publil by SMSG (Semua Murid Semua Guru)",
  },
  {
    image: Workshop,
    alt: "Workshop",
    body: "Education & Scholarship Workshop",
  },
  {
    image: Supermentor,
    alt: "Supermentor",
    body: "Scholarship Supermentor",
  },
];
