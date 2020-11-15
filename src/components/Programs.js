import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function ProgramsSection() {
  return (
    <section className="programs-area" id="programs">
      <Container>
        <Row>
          <Col lg={12} className="text-center mt-5">
            <h2 className="second-title">Program</h2>
            <p className="description">
              10+ Acara Beasiswa di 15 Kota di Indonesia
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            className="d-block d-md-flex flex-md-wrap justify-content-between"
          >
            {programsContents.map((content, i) => (
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

const programsContents = [
  {
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1570263200/ckjwuxruhbc75hfwwc6i.png",
    alt: "Program WISH",
    body: "WISH Inspiring Talk",
  },
  {
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1570263200/ckjwuxruhbc75hfwwc6i.png",
    alt: "Program WISH",
    body: "WISH Inspiring Talk",
  },
  {
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1570263200/ckjwuxruhbc75hfwwc6i.png",
    alt: "Program WISH",
    body: "WISH Inspiring Talk",
  },
  {
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1570263200/ckjwuxruhbc75hfwwc6i.png",
    alt: "Program WISH",
    body: "WISH Inspiring Talk",
  },
  {
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1570263200/ckjwuxruhbc75hfwwc6i.png",
    alt: "Program WISH",
    body: "WISH Inspiring Talk",
  },
  {
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1570263200/ckjwuxruhbc75hfwwc6i.png",
    alt: "Program WISH",
    body: "WISH Inspiring Talk",
  },
];
