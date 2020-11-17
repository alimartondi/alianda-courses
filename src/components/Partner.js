import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import Isn from "../images/isn_logo.png";
import Isc from "../images/isc_logo.png";
import Baznas from "../images/baznas_logo.png";
import Dataprint from "../images/dataprint_logo.png";
import Iabie from "../images/iabie_logo.png";
import IndoRelawan from "../images/indorelawan_logo.png";
import Medcom from "../images/medcom_logo.png";
import NutriFood from "../images/nutrifood_logo.png";
import Osc from "../images/osc_logo.png";
import Pemimpin from "../images/pemimpin_logo.png";
import DompetDhuafa from "../images/dompet_dhuafa_logo.png";
import PresidentUnivers from "../images/president_university_logo.png";
import Sb from "../images/sb_logo.png";
import TesBeasiswa from "../images/tes_beasiswa_logo.png";
import Xl from "../images/xl_logo.png";
import Schoters from "../images/schoters_logo.png";
import Deeptech from "../images/deep_tech_logo.png";
import Itc from "../images/itc_logo.png";
import Isc1 from "../images/isc1_logo.png";

export default class PartnerSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
      rows: 2,
      dots: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: false,
          },
        },
      ],
    };

    return (
      <section className="partner-area bg-light pt-4 pb-5" id="partner">
        <Container className="partner-slider">
          <Row className="partner-items justify-content-center mt-5">
            <div className="partner-intro ju text-center">
              <h2 className="second-title">WISH Festival 3.0</h2>
              <h2 className="subtitle">Organized By</h2>
            </div>
            <Col lg={12} className="text-center mt-3">
              <img src={Isc} alt="ISC Logo" />
              <img src={Isn} alt="ISN Logo" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <h2 className="subtitle">Partnered With</h2>
          </Row>
          <Slider {...settings}>
            {partnerContents.map((content, i) => (
              <Col lg={12} className="partner-card mt-3" key={i}>
                <img src={content.img} alt="" />
              </Col>
            ))}
          </Slider>
        </Container>
      </section>
    );
  }
}

const partnerContents = [
  {
    img: Baznas,
  },
  {
    img: Dataprint,
  },
  {
    img: Deeptech,
  },
  {
    img: Iabie,
  },
  {
    img: Medcom,
  },
  {
    img: Osc,
  },
  {
    img: Sb,
  },
  {
    img: DompetDhuafa,
  },
  {
    img: PresidentUnivers,
  },
  {
    img: IndoRelawan,
  },
  {
    img: Xl,
  },
  {
    img: NutriFood,
  },
  {
    img: Itc,
  },
  {
    img: Schoters,
  },
  {
    img: TesBeasiswa,
  },
  {
    img: Isc1,
  },
  {
    img: Pemimpin,
  },
];
