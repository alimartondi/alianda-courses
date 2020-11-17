import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Wish from "../images/wish3.0.png";

export default function WishSection() {
  return (
    <section className="wish-information mt-5 pb-5" id="wish">
      <Container>
        <Row>
          <Col lg={12} className="text-center mt-5">
            <h2 className="second-title">Apa itu WISH</h2>
            <p className="description">
              Mewujudkan pemerataan informasi dan kesempatan beasiswa bagi
              seluruh rakyat Indonesia
            </p>
          </Col>
        </Row>
        <Row className="mt-5 align-items-center">
          <Col lg={6}>
            <img src={Wish} alt="" className="img-fluid rounded-lg" />
          </Col>
          <Col lg={6}>
            <p className="description mt-4 mt-xl-0">
              WISH Festival adalah festifal pendidikan dan beasiswa terbesar di
              Indonesia
              <br />
              <br /> Dapatkan kesempatan untuk mengikuti berbagai workshop
              persiapan beasiswa seperti:
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
