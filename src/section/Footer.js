import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import FooterBrand from "../images/footer-brand.svg";
import Visa from "../images/visa.png";
import Mastercard from "../images/mastercard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="footer-area pt-5" id="footer">
      <Container>
        <Row>
          <Col lg={4} className="mb-5 text-center text-md-left">
            <div className="footerBrand">
              <img src={FooterBrand} alt="footer-brand" />
            </div>
            <Form className=" d-none d-md-flex mt-5">
              <Form.Control
                type="text"
                placeholder="Enter your email"
                className="bg-transparent"
              />
              <Button
                size="sm"
                variant="light"
                className="subscribeBtn ml-2 rounded-lg"
                type="input"
              >
                Subscribe
              </Button>
            </Form>
          </Col>
          <Col lg={5} className="d-flex justify-content-center">
            <div className="footerItems d-flex justify-content-center">
              <div className="footerItems-about">
                <h6 className="mb-3">About Us</h6>
                <Link
                  to="teams"
                  smooth={true}
                  spy={true}
                  offset={-80}
                  className="footerLink"
                >
                  Our Team
                </Link>
                <Link
                  to="#"
                  smooth={true}
                  spy={true}
                  offset={-80}
                  className="footerLink"
                >
                  Our Courses
                </Link>
                <Link
                  to="/"
                  smooth={true}
                  spy={true}
                  offset={-80}
                  className="footerLink"
                >
                  Service Plus
                </Link>
              </div>
              <div className="footerItems-company ml-5">
                <h6 className="mb-3">Company</h6>
                <Link
                  to="/"
                  smooth={true}
                  spy={true}
                  offset={-80}
                  className="footerLink"
                >
                  Blog
                </Link>
                <Link
                  to="/"
                  smooth={true}
                  spy={true}
                  offset={-80}
                  className="footerLink"
                >
                  Partnership
                </Link>
                <Link
                  to="/"
                  smooth={true}
                  spy={true}
                  offset={-80}
                  className="footerLink"
                >
                  Carer
                </Link>
                <Link
                  to="testimonial"
                  smooth={true}
                  spy={true}
                  className="footerLink"
                >
                  Testimonial
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footerPartner d-flex mt-5 mt-lg-0 justify-content-center justify-content-lg-end">
              <img src={Visa} alt="visa-logo" />
              <img src={Mastercard} alt="mastercard-logo" className="ml-4" />
            </div>
            <div className="footerSoc d-flex mt-3 justify-content-center justify-content-lg-end">
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.youtube.com/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="footerItems-line" />
        <Row className="justify-content-end">
          <Col lg={3} className="text-right pb-3">
            <p className="small">
              &copy; Alianda 2021 | Made With{" "}
              <span style={{ color: "red" }}>&#10084;</span>
              <br /> All right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
