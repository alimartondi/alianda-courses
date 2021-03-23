import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../style/style.css";
import Appstore from "../images/appstore.svg";
import Playstore from "../images/playstore.svg";

export default function RegisterSection() {
  return (
    <section className="register-area mt-md-5" id="register">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="register-card d-block d-md-flex align-items-center justify-content-between">
              <div className="register-body text-center text-md-left mr-0 mr-xl-5">
                <h3 className="secondHero-title">
                  Download a <span className="text-info">Free Mobile App</span>
                </h3>
                <p className="subtitle mt-3">
                  how to be front-end in the short term?
                  <br /> Do you need programmer skills for your career?
                  <br /> We're here to answer them all
                </p>
                <div className="registerCard-button mt-5">
                  <a href="#">
                    <img
                      src={Appstore}
                      alt="appstore-logo"
                      className="img-fluid"
                      target="blank"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={Playstore}
                      alt="playstore-logo"
                      className="ml-1 img-fluid"
                      target="blank"
                    />
                  </a>
                </div>
              </div>
              <div className="register-card-img"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
