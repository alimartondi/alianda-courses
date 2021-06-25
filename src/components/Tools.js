import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoursesApp from "../images/courses-app.png";
import Appstore from "../images/appstore.svg";
import Playstore from "../images/playstore.svg";

export default function Tools() {
  return (
    <section className="tools">
      <Container className="tools-content">
        <Row className="text-center align-items-center">
          <Col
            lg={6}
            className="text-left order-2 order-lg-1 mt-4 mt-lg-0 pl-lg-5"
          >
            <h1 className="second-title">
              Now you can access all study material on Your phone
            </h1>
            <p className="sub-title text-dark mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              quisquam id temporibus modi magnam recusandae quae quia fugiat
              impedit doloribus.
            </p>
            <div className="tools-button d-flex mt-5">
              <img src={Playstore} alt="playstore" className="img-fluid mr-2" />
              <img src={Appstore} alt="appstore" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6} className="order-1 order-lg-2">
            <img
              src={CoursesApp}
              alt="courses-app"
              className="img-fluid mt-n5"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
