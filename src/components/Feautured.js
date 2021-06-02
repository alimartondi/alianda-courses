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
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <p className="secondHero-text mt-5">Start Learning Today</p>
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
                      <Card.Text>{content.body}</Card.Text>

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
    body: "Learn to make UI/UX Website or Mobile App using Figma and XD with various case studies",
  },
  {
    icon: faDesktop,
    title: "Full-Stack Developer",
    body: "Learn to make UI/UX Website or Mobile App using Figma and XD with various case studies",
  },
];
