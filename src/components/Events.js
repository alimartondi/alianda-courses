import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import RoadShow1 from "../images/roadshow_1.png";
import RoadShow2 from "../images/roadshow_2.png";
import RoadShow3 from "../images/roadshow_3.png";
import RoadShow4 from "../images/roadshow_4.png";
import RoadShow5 from "../images/roadshow_5.png";
import RoadShow6 from "../images/roadshow_6.png";
import RoadShow7 from "../images/roadshow_7.png";
import RoadShow8 from "../images/roadshow_8.png";
import RoadShow9 from "../images/roadshow_9.png";
import RoadShow10 from "../images/roadshow_10.png";
import RoadShow11 from "../images/roadshow_11.png";
import RoadShow12 from "../images/roadshow_12.png";
import RoadShow13 from "../images/roadshow_13.png";
import RoadShow14 from "../images/roadshow_14.png";
import RoadShow15 from "../images/roadshow_15.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

export default function EventsSection() {
  return (
    <section className="events-area bg-light" id="events">
      <Container>
        <Row>
          <Col lg={12} className="text-center mt-3">
            <h2 className="second-title">Events</h2>
            <p className="description">Roadshow 15 Kota di Indonesia</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="events-items">
              <div className="events-items-grid">
                {eventsContents.map((content, i) => (
                  <div className="events-card mt-4" key={i}>
                    <Card.Header className="card-header">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                      Postponed
                    </Card.Header>
                    <div className="card-img p-0">
                      <img src={content.image} alt={content.alt} />
                    </div>
                    <Card.Body className="card-body">
                      <p className="description">{content.body}</p>
                    </Card.Body>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const eventsContents = [
  {
    image: RoadShow1,
    alt: "UMM",
    body: "Universitas Muhammadiyah Malang",
  },
  {
    image: RoadShow2,
    alt: "UIN Sunan Kalijaga",
    body: "UIN Sunan Kaligaja, Jogjakarta",
  },
  {
    image: RoadShow3,
    alt: "UKP",
    body: "Universitas Katolik Parahyangan, Bandung",
  },
  {
    image: RoadShow4,
    alt: "UIN Walisongo",
    body: "UIN Walisongo, Semarang",
  },
  {
    image: RoadShow5,
    alt: "Universitas Tanjungpura",
    body: "Universitas Tanjungpura, Pontianak",
  },
  {
    image: RoadShow6,
    alt: "Universitas Manado",
    body: "Universias Negeri Manado",
  },
  {
    image: RoadShow7,
    alt: "Universias Pattimura",
    body: "Universitas Pattimura, Ambon",
  },
  {
    image: RoadShow8,
    alt: "UIN Alauddin Makassar",
    body: "UIN Alauddin, Makassar ",
  },
  {
    image: RoadShow9,
    alt: "Universitas Mataram",
    body: "Universitas Mataram, Mataram",
  },
  {
    image: RoadShow10,
    alt: "UIN RIL",
    body: "UIN Raden Inten Lampung",
  },
  {
    image: RoadShow11,
    alt: "UIN Raden Fatah",
    body: "UIN Raden Fatah, Palembang",
  },
  {
    image: RoadShow12,
    alt: "UMR",
    body: "Universitas Muhammadiyah Riau, Pekanbaru",
  },
  {
    image: RoadShow13,
    alt: "UMA",
    body: "Universitas Medan Area",
  },
  {
    image: RoadShow14,
    alt: "UIN Sunan Ampel",
    body: "UIN Sunan Ampel, Surabaya",
  },
  {
    image: RoadShow15,
    alt: "Uiversitas al-Azhar",
    body: "Universitas Al Azhar/UIN Syarif Hidayatullah, Jakarta",
  },
];
