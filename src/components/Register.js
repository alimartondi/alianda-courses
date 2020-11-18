import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Register from "../images/register.png";
import "../style/style.css";
import Shape from "../images/shape-2.png";

export default function RegisterSection() {
  return (
    <section className="register-area mt-md-5" id="register">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="register-card d-block d-md-flex align-items-center justify-content-between">
              <div className="register-body text-center text-md-left mr-0 mr-xl-5 mt-5">
                <h3 className="second-title">
                  Daftar Gratis untuk Ikuti Semua Program WISH!
                </h3>
                <p className="subtitle mt-3">
                  Dapatkan kesempatan untuk mengikuti berbagai workshop
                  persiapan beasiswa
                </p>
                <Button variant="info mt-3">Daftar Sekarang</Button>
              </div>
              <div className="register-card-img">
                <img
                  src={Register}
                  alt="Register"
                  className="d-none d-md-block"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
