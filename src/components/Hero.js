import React from "react";
import "slick-carousel/slick/slick.css";
import HeroPic from "../images/businessman.png";
import "../style/style.css";
import { Col, Button, Container, Row } from "react-bootstrap";
import Facebook from "../images/facebook.svg";
import Google from "../images/google.svg";
import Microsoft from "../images/microsoft.svg";
import Instagram from "../images/instagram.svg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <Container>
          <Row>
            <Col lg={6} className="pr-0 pt-2 pt-md-5">
              <p className="sub-title mb-0 mt-3">Get started</p>
              <h1 className="main-title">
                Become a frontend Developer{" "}
                <span style={{ color: "#ff6e30" }}>in a cool </span>Away with
                us,
              </h1>
              <p className="sub-title mt-5 mt-md-4 pr-2 pr-md-5  ">
                We provide a comfortable place to be a Frontend Developer, take
                your most comfortable place and join us, be a successful person
                from now!
              </p>
              <Button
                variant="light mt-5 px-4 py-2 rounded-lg"
                className="main-button"
              >
                Learn more
              </Button>
            </Col>
            <Col
              lg={6}
              className="d-none d-lg-block text-right pr-0 align-self-end"
            >
              <img src={HeroPic} alt="hero" className="img-fluid" />
            </Col>
          </Row>
          {/* <Row className="justify-content-center">
            <Col lg={11}>
              <div className="partner-box bg-white mt-5 mt-xl-0 mb-n4 d-flex justify-content-between px-3 px-md-5 py-3 py-md-4 align-items-start">
                <img src={Facebook} alt="facebook-logo" className="img-fluid" />
                <img src={Google} alt="google-logo" className="img-fluid" />
                <img src={Microsoft} alt="paypal-logo" className="img-fluid" />
                <img src={Instagram} alt="visa-logo" className="img-fluid " />
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </section>
  );
}
