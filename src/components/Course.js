import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import GultomLand from "../images/gultom-landpage.png";
import AliandaLand from "../images/alianda-landpage.png";
import MyPortfolio from "../images/myportfolio-landpage.png";
import MoribaDashboard from "../images/moriba-dashboard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default class Course extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      infinite: false,
      speed: 500,
      dots: true,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    };

    return (
      <section className="course" id="course">
        <Container>
          <Row className="align-items-center">
            <Col
              lg={6}
              className="course-content mt-5 mt-lg-0 order-2 order-lg-1"
            >
              <h2 className="second-title mb-4">
                Learn with many case studies
              </h2>
              <p className="description mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters of them
              </p>
              <Button variant="main-button rounded-pill">Get started</Button>
            </Col>
            <Col lg={6} className="px-0 pr-md-3 order-1">
              <Slider {...settings}>
                {featureContents.map((content, i) => (
                  <Card className="course-card border-0" key={i}>
                    <Card.Header className="bg-white border-0 p-3">
                      <img
                        src={content.image}
                        alt="fullstack"
                        className="img-fluid mx-auto"
                      />
                    </Card.Header>
                    <Card.Body className="pt-0">
                      <p className="third-title">{content.title}</p>
                      <div className="star-rate d-flex text-warning">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <p className="ml-2 text-dark font-weight-normal">
                          {content.rate}
                        </p>
                      </div>
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

const featureContents = [
  {
    image: GultomLand,
    title: `Build company profile
    with React + Tailwind`,
    rate: "4.5",
  },
  {
    image: AliandaLand,
    title: `Create Portfolio Website with React + Bootstrap`,
    rate: "4.1",
  },
  {
    image: MoribaDashboard,
    title: `Build Admin Dashboard With Vue + Cakra UI`,
    rate: "4.6",
  },
  {
    image: MyPortfolio,
    title: `Create Online Shop with PHP + Bootstrap`,
    rate: "4.4",
  },
];
