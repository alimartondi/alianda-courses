import React from "react";
import CoursesApp from "../images/courses-app.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

export default function Application() {
  return (
    <section className="application">
      <Container>
        <Row className="application-content align-items-center mx-md-0 pb-5">
          <Col
            lg={6}
            className="text-left order-2 order-lg-1 pl-lg-5 pr-md-5 mt-4 mt-md-0"
          >
            <h1 className="second-title text-white">
              Get it on Play Store or App Store
            </h1>
            <p className="description text-white mt-4">
              Have you ever imagined a place to study that you can easily reach
              even from your bed, we are the answer because comfortable learning
              will support your creativity
            </p>
            <div className="mt-4 d-flex">
              <Button variant="main-button rounded-pill mr-1 mr-md-2">
                <FontAwesomeIcon icon={faGooglePlay} className="mr-1" />
                Play store
              </Button>
              <Button variant="main-button rounded-pill">
                <FontAwesomeIcon icon={faApple} className="mr-1" />
                App store
              </Button>
            </div>
          </Col>
          <Col lg={6} className="order-1 order-lg-2 text-center text-lg-right">
            <img
              src={CoursesApp}
              alt="Application Mockup"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
