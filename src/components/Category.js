import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { faArtstation, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faBezierCurve,
  faChevronRight,
  faCode,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Category() {
  return (
    <section className="category mx-0 mx-md-5" id="category">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg={7} className="text-center">
            <h2 className="second-title">Find the class you needed</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row>
          {categoryContents.map((content, i) => (
            <Col md={4} className="featured-items" key={i}>
              <Card
                className="category-card text-center mt-4 border-0 p-4 p-md-4"
                key={i}
              >
                <div className="category-card__icon d-flex justify-content-center align-items-center text-white">
                  <FontAwesomeIcon icon={content.icon}></FontAwesomeIcon>
                </div>
                <h6 className="third-title mt-5">{content.title}</h6>
                <p className="description mt-3">{content.body}</p>
                <p className="mt-4 text-right">
                  More Detail
                  <FontAwesomeIcon
                    className="ml-2 small"
                    icon={faChevronRight}
                  ></FontAwesomeIcon>
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

const categoryContents = [
  {
    icon: faBezierCurve,
    title: "Become a Master UI/UX",
    body: "Learn to make UI/UX Website or Mobile App using Figma and XD with various case studies",
  },
  {
    icon: faCode,
    title: "Front-End Developer",
    body: "In this course we use popular Frontend Frameworks like ReactJs, Tailwindcss and many",
  },
  {
    icon: faDesktop,
    title: "Full-Stack Developer",
    body: "We also provide classes for those of you who like a challenge to master everything",
  },
];
