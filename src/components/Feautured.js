import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { faArtstation, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faBezierCurve,
  faChevronRight,
  faCode,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProgramsSection() {
  return (
    <section className="feautured" id="feautured">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg={7} className="text-center">
            <h2 className="secondHero-title">Populer Online Classes</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="feautured-items mt-2">
              <div className="feautured-items__grid">
                {feauturedContents.map((content, i) => (
                  <Card
                    className="feautured-items__card text-left border-0 p-2"
                    key={i}
                  >
                    <Card.Header className="bg-white border-0">
                      <div className="feautured-card__icon d-flex justify-content-center align-items-center text-white">
                        <FontAwesomeIcon icon={content.icon}></FontAwesomeIcon>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title className="w-75">
                        <h6 className="secondHero-title">{content.title}</h6>
                      </Card.Title>
                      <Card.Text className="description mt-4">
                        {content.body}
                      </Card.Text>

                      <Button className="third-button btn-light py-2 px-3 text-right mt-4">
                        More Detail
                        <FontAwesomeIcon
                          className="ml-2"
                          icon={faChevronRight}
                        ></FontAwesomeIcon>
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const feauturedContents = [
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
