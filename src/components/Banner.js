import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function BannerSection() {
  return (
    <section className="banner-area" id="banner">
      <div className="left-cover"></div>
      <Container>
        <div className="banner-cover">
          <Row>
            <Col lg={6}></Col>
            <Col lg={6}></Col>
          </Row>
        </div>
        <div className="banner-content">
          <h5 className="subtitle mt-5">
            WISH &#40;World Indonesia Scholarship &#41;{" "}
          </h5>
          <h1 className="main-title mt-3">
            The Biggest Scholarship &amp; Education Event in Indonesia
          </h1>
          <h5 className="subtitle">
            Mewujudkan Pemerataan Informasi &amp; Kesempatan Beasiswa bagi
            seluruh Rakyat Indonesia.
          </h5>
        </div>
      </Container>
    </section>
  );
}
