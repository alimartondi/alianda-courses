import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Register from "../images/register.png";

export default function RegisterSection() {
  return (
    <section className="register-area mt-5" id="register">
      <Container>
        <Row className="justify-content-end">
          <Col lg={9}>
            <div className="register-card d-block d-md-flex align-items-center mt-5 ">
              <div className="register-body text-center text-md-right mr-5 mt-5">
                <h3 className="second-title">
                  Daftar Gratis untuk Ikuti Semua Program WISH!
                </h3>
                <Button variant="warning mt-3">Daftar Sekarang</Button>
              </div>
              <div className="register-card-image">
                <img src={Register} alt="Register image" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
