import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Banner from "../images/cover-2.png";
import { Col, Button, Container } from "react-bootstrap";

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
      pauseOnHover: false,
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
              button2={content.button2}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

function SlideSlider(props) {
  return (
    <div className="full-banner">
      <Col lg={12} className="px-0">
        <img src={props.image} alt={props.alt} className="img-fluid" />

        <div className="banner-content mt-5">
          <h1 className="main-title">{props.title}</h1>
          <h5 className="subtitle mt-3">{props.intro}</h5>
          <div className="banner-logos d-block d-md-flex justify-content-center justify-content-md-start mt-5">
            <div className="wish-lokalate">
              <Button variant="light px-3">{props.button}</Button>
            </div>
            <div className="wish-online ml-xl-2">
              <Button variant="outline-light px-3 mt-3 mt-md-0">
                {props.button2}
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
}

const sliderContents = [
  {
    image: Banner,
    alt: `Banner Image`,
    title: `WISH
    (World Indonesia Scholarship)`,
    intro: "The Biggest Scholarship & Education Event in Indonesia",
    description:
      "Mewujudkan Pemerataan Informasi & Kesempatan Beasiswa bagi seluruh Rakyat Indonesia.",
    button: "Registrasi Peserta",
    button2: "Daftar Volunteer",
  },
  {
    image: Banner,
    alt: `Banner Image`,
    title: "World Indonesia Scholarship",
    intro: "The Biggest Scholarship & Education Event in Indonesia",
    description:
      "Mewujudkan Pemerataan Informasi &amp; Kesempatan Beasiswa bagi seluruh Rakyat Indonesia.",
    button: "Registrasi Peserta",
    button2: "Daftar Volunteer",
  },
  {
    image: Banner,
    alt: `Banner Image`,
    title: "World Indonesia Scholarship",
    intro: "The Biggest Scholarship & Education Event in Indonesia",
    description:
      "Mewujudkan Pemerataan Informasi &amp; Kesempatan Beasiswa bagi seluruh Rakyat Indonesia.",
    button: "Registrasi Peserta",
    button2: "Daftar Volunteer",
  },
];
