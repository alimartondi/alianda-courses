import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col, Container, Row } from "react-bootstrap";
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
      arrows: false,
      centerMode: true,
      centerPadding: "10px",
      dots: true,
      infinite: true,
      speed: 800,
      responsive: [
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
      ],
    };

    return (
      <section className="pt-4" id="testimonial">
        <Container className="">
          <Row className="justify-content-center mt-5">
            <Col lg={7} className="text-center">
              <h2 className="second-title">What our customers say</h2>
              <p className="sub-title text-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                voluptatem consequatur quia error laboriosam tenetur eius.
              </p>
            </Col>
          </Row>

          <Row className="mt-3 justify-content-center">
            <Col lg={12} className="px-2">
              <Slider {...settings}>
                {testimonialContents.map((content, i) => (
                  <Card className="testimonial-card border-0">
                    <Card.Body>
                      <img
                        src={content.img}
                        alt={content.name}
                        className="img-fluid rounded-lg mb-3"
                      />
                      <p className="third-title mb-0">{content.name}</p>
                      <p className="description">{content.profession}</p>
                      <p className="description">{content.comment}</p>
                    </Card.Body>
                  </Card>
                ))}
              </Slider>
            </Col>
          </Row>
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
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem consequatur quia error laboriosam tenetur eius.",
  },
  {
    img: Alex,
    name: "Alex Morgan",
    profession: "Collage Student",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem consequatur quia error laboriosam tenetur eius.",
  },
  {
    img: Morgan,
    name: "Rodriges Vitolo",
    profession: "Public Speaker",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem consequatur quia error laboriosam tenetur eius.",
  },
  {
    img: Jhon,
    name: "Jhone Michel",
    profession: "Programmer",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem consequatur quia error laboriosam tenetur eius.",
  },
];
