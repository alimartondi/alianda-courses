import { Component } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Card } from "react-bootstrap";
import Fullstack from "../images/fullstack.svg";
import TopClassBg from "../images/top-class-bg.png";

export default class Ffeautured extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      infinite: false,
      speed: 500,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    };

    return (
      <section>
        <Container>
          <Row className="mt-5 flex justify-content-center">
            <Col lg={7} className="text-center mb-5">
              <p className="secondHero-text">Top Feautured</p>
              <h2 className="secondHero-title">Find the class you needed</h2>
              <p className="mainSecond-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row className="flex">
            <Col className="d-none d-lg-block">
              <img
                src={TopClassBg}
                alt="top-class-background"
                className="img-fluid"
              />
            </Col>
            <Col lg={8}>
              <Slider {...settings}>
                {FfeauturedContents.map((content, i) => (
                  <Card className="feautured-card border-0 rounded-lg pt-3">
                    <Card.Header className="bg-white border-0">
                      <img
                        src={content.image}
                        alt="fullstack"
                        className="img-fluid mx-auto"
                      />
                    </Card.Header>
                    <Card.Body className="text-center">
                      <p className="secondHero-title">{content.title}</p>
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

const FfeauturedContents = [
  {
    image: Fullstack,
    title: `Fullstack Designer`,
  },
  {
    image: Fullstack,
    title: `React Master`,
  },
  {
    image: Fullstack,
    title: `UI/UX Master`,
  },
  {
    image: Fullstack,
    title: `UI/UX Master`,
  },
];
