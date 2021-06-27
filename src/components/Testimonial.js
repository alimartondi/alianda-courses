import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Robert from "../images/robert.png";
import Alex from "../images/alex.png";
import Morgan from "../images/morgan.png";
import Jhon from "../images/jhon.png";

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
      speed: 500,
      draggable: true,
      responsive: [
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            dots: true,
            centerPadding: "0",
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
                listen to some interesting stories from our customers'
                experiences, and you can be a part of their success stories
              </p>
            </Col>
          </Row>

          <Row className="mt-3 justify-content-around px-lg-4 align-items-start">
            <Col lg={12} className="px-0">
              <Slider {...settings}>
                {testimonialContents.map((content, i) => (
                  <Card className="testimonial-card border-0 p-3" key={i}>
                    <Card.Body>
                      <div className="testimonial-card__image">
                        <img
                          src={content.img}
                          alt={content.name}
                          className="img-fluid mb-3"
                        />
                      </div>
                      <p className="third-title mb-0 mt-3">{content.name}</p>
                      <p className="small">{content.profession}</p>
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
      "The course is amazing and goes super deep on Tailwind framework and React",
  },
  {
    img: Alex,
    name: "Alex Morgan",
    profession: "Collage Student",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    comment:
      "Yeah, I got a job after taking this course, this is the course I'm looking for, good job man",
  },
  {
    img: Morgan,
    name: "Rodriges Vitolo",
    profession: "Public Speaker",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    comment:
      "This is the course I'm looking for, complete with case studies too, so I understand quickly",
  },
  {
    img: Jhon,
    name: "Jhone Michel",
    profession: "Programmer",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    comment:
      "What an amazing class, at first I was hesitant, but after taking this class everything changed",
  },
];
