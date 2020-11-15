import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../images/cover-2.png";
import { Col, Row, Button } from "react-bootstrap";

export default class SlickSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          {sliderContents.map((content, i) => (
            <SlideSlider
              key={i}
              image={content.image}
              alt={content.alt}
              intro={content.intro}
              title={content.title}
              description={content.description}
              button={content.button}
              button={content.button}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

function SlideSlider(props) {
  return (
    <Col lg={12} className="px-0">
      <div className="full-banner">
        <img src={props.image} alt={props.alt} className="img-fluid" />

        <div className="banner-content">
          <h5 className="subtitle mt-5">{props.intro}</h5>
          <h1 className="main-title mt-3">{props.title}</h1>
          <h5 className="subtitle">{props.description}</h5>
          <div className="banner-logos d-flex mt-5">
            <div className="wish-lokalate">
              <h5>Logo Wish</h5>
              <Button variant="outline-light px-3">{props.button}</Button>
            </div>
            <div className="wish-online ml-5">
              <h5>Wish Logo</h5>
              <Button variant="outline-light px-3">{props.button}</Button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

const sliderContents = [
  {
    image: Banner,
    alt: `Banner Image`,
    intro: "World Indonesia Scholarship",
    title: "The Biggest Scholarship & Education Event in Indonesia",
    description:
      "Mewujudkan Pemerataan Informasi &amp; Kesempatan Beasiswa bagi seluruh Rakyat Indonesia.",
    button: "Register",
  },
  {
    image: Banner,
    alt: `Banner Image`,
    intro: "World Indonesia Scholarship",
    title: "The Biggest Scholarship & Education Event in Indonesia",
    description:
      "Mewujudkan Pemerataan Informasi &amp; Kesempatan Beasiswa bagi seluruh Rakyat Indonesia.",
    button: "Register",
  },
];
