import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import Robert from "../images/robert.png";
import Alex from "../images/alex.png";
import Morgan from "../images/morgan.png";
import Jhon from "../images/jhon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default class Testimonial extends Component {
  render() {
    const settings = {
      className: "center",
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      centerPadding: "20px",
      infinite: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    };

    return (
      <section className="pt-4" id="testimonial">
        <Container className="">
          <Row className="justify-content-center mt-5">
            <Col lg={7} className="text-center">
              <p className="secondHero-text">Testimonial</p>
              <h2 className="secondHero-title">What Are The Saying</h2>
              <p className="mainSecond-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                voluptatem consequatur quia error laboriosam tenetur eius.
              </p>
            </Col>
          </Row>

          <Row className="mt-3"></Row>
          <Slider {...settings}>
            {testimonialContents.map((content, i) => (
              <Col lg={12} className="testimonialCard text-center mt-3" key={i}>
                <div className="testimonialCard-head">
                  <img
                    src={content.img}
                    className="rounded-circle mx-auto"
                    alt={content.name}
                  />
                  <div className="testimonialCard-link-social d-flex justify-content-center mt-3">
                    <a href={content.facebook} className="link-social">
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                    <a href={content.instagram} className="link-social">
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a href={content.linkedin} className="link-social">
                      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                  </div>
                </div>
                <div className="testimonialCard-content px-3">
                  <p className="mainCard-title">{content.name}</p>
                  <p className="mainCard-text">{content.profession}</p>
                  <p className="description">{content.message}</p>
                </div>
              </Col>
            ))}
          </Slider>
        </Container>
      </section>
    );
  }
}

const testimonialContents = [
  {
    img: Robert,
    name: "Robert Marpaung",
    profession: "Student",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem consequatur quia error laboriosam tenetur eius.",
  },
  {
    img: Alex,
    name: "Alex Morgan",
    profession: "Collage Student",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem consequatur quia error laboriosam tenetur eius.",
  },
  {
    img: Morgan,
    name: "Rodriges Vitolo",
    profession: "Public Speaker",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem consequatur quia error laboriosam tenetur eius.",
  },
  {
    img: Jhon,
    name: "Jhone Michel",
    profession: "Programmer",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem consequatur quia error laboriosam tenetur eius.",
  },
];
