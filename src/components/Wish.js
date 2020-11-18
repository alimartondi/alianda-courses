import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Wish from "../images/wish3.0.png";
import Font from "../images/font3.0.png";

export default function WishSection() {
  return (
    <section className="wish-information mt-5 pb-5" id="wish">
      <Container>
        <Row>
          <Col lg={12} className="text-center mt-3">
            <h2 className="second-title">Apa itu WISH</h2>
            <p className="subtitle">
              Mewujudkan pemerataan informasi dan kesempatan beasiswa bagi
              seluruh rakyat Indonesia
            </p>
          </Col>
        </Row>
        <Row className="mt-xl-5 align-items-center">
          <Col lg={6}>
            <img src={Wish} alt="WISH logo" className="img-fluid rounded-lg" />
          </Col>
          <Col lg={6}>
            <p className="subtitle mt-3 mt-xl-0">
              WISH Festival adalah festival pendidikan dan beasiswa terbesar di
              Indonesia
            </p>
            <p
              className="description mt-xl-0"
              style={{ whiteSpace: "pre-line" }}
            >
              Dapatkan kesempatan untuk mengikuti berbagai workshop persiapan
              beasiswa seperti:
              <br /> - Pelatihan Bahasa Inggris Gratis
              <br />- IELTS, TOEFL, TOEIC Coaching Clinik
              <br /> - IELTS &amp; TOEFL Prediction Test
              <br /> - Tes Potensi Akademik (TPA) by tesbeasiswa.com
              <br /> - Tes Kemampuan Bahasa Inggris by Schoters
              <br /> - Tryout OSC (Online Scholarship Competition) medcom
              <br /> - Pelatihan Softskill by XL Future Leaders
              <br /> - Pelatihan dan Bimbingan Persiapan Beasiswa by Schoters
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
