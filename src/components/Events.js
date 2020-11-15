import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function EventsSection() {
  return (
    <section className="events-area mb-5" id="events">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="second-title mt-5">Kegiatan</h1>
            <p className="description mt-3">Roadshow 15 Kota di Indonesia</p>
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            className="d-block d-md-flex flex-md-wrap justify-content-between"
          >
            {eventsContents.map((content, i) => (
              <div className="events-card mt-5">
                <div className="card-img p-0">
                  <img
                    src={content.image}
                    alt={content.alt}
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <p className="description">{content.body}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const eventsContents = [
  {
    image:
      "https://beasiswa-id.net/wp-content/uploads/Salah-Satu-Kampus-Pendidikan-di-Universitas-Muhammadiyah-Malang.jpg",
    alt: "Universitas Muhammadiyah malang",
    body:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, dolor!",
  },
  {
    image:
      "https://beasiswa-id.net/wp-content/uploads/Salah-Satu-Kampus-Pendidikan-di-Universitas-Muhammadiyah-Malang.jpg",
    alt: "Universitas Muhammadiyah malang",
    body:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, dolor!",
  },
  {
    image:
      "https://beasiswa-id.net/wp-content/uploads/Salah-Satu-Kampus-Pendidikan-di-Universitas-Muhammadiyah-Malang.jpg",
    alt: "Universitas Muhammadiyah malang",
    body:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, dolor!",
  },
  {
    image:
      "https://beasiswa-id.net/wp-content/uploads/Salah-Satu-Kampus-Pendidikan-di-Universitas-Muhammadiyah-Malang.jpg",
    alt: "Universitas Muhammadiyah malang",
    body:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, dolor!",
  },
  {
    image:
      "https://beasiswa-id.net/wp-content/uploads/Salah-Satu-Kampus-Pendidikan-di-Universitas-Muhammadiyah-Malang.jpg",
    alt: "Universitas Muhammadiyah malang",
    body:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, dolor!",
  },
  {
    image:
      "https://beasiswa-id.net/wp-content/uploads/Salah-Satu-Kampus-Pendidikan-di-Universitas-Muhammadiyah-Malang.jpg",
    alt: "Universitas Muhammadiyah malang",
    body:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, dolor!",
  },
];
