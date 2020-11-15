import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function WishSection() {
  return (
    <section className="wish-information mb-5" id="wish">
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
            <img
              src="https://risetcdn.jatimtimes.com/images/2019/04/21/Wagub-Jatim-Emil-Elestianto-Dardakd5dd8314d054dc8784da5505cb7c8fb9.md.jpg"
              alt=""
              className="img-fluid rounded-lg"
            />
          </Col>
          <Col lg={6}>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
              distinctio porro corrupti sint quasi consequatur velit quibusdam
              iure eos tenetur. Architecto quo molestiae temporibus cum
              exercitationem ex praesentium maxime quae, totam minima? Sed
              commodi, praesentium animi, beatae fuga voluptates et alias
              inventore doloribus neque, vel molestias necessitatibus quisquam
              consectetur id?
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
