import { Container, Row, Col, Card } from "react-bootstrap";
import Ludovic from "../images/ludovic.png";
import Aziz from "../images/aziz.png";
import Vicky from "../images/vicky.png";
import Mathilde from "../images/mathilde.png";

export default function Teams() {
  return (
    <section>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg={7} className="text-center">
            <h1 className="secondHero-title">Our Professional Teams</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              corporis dolores labore? Unde, quaerat deleniti.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="team-items">
              <div className="team-items__grid">
                {teamContents.map((content, i) => (
                  <Card className="team-items__card border-0 p-0" key={i}>
                    <Card.Body className="p-0 team-card__body">
                      <img
                        src={content.image}
                        alt={content.name}
                        className="img-fluid"
                      />
                    </Card.Body>
                    <span className="team-nickname mx-auto w-100">
                      <h1 className="nickname">{content.name}</h1>
                      <h5 className="fullname mb-0">{content.fullname}</h5>
                      <p className="position d-none d-md-block text-white m-0">
                        Frontend Engineer
                      </p>
                    </span>
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

const teamContents = [
  {
    name: "ludovic",
    fullname: "Ludovic Migneault",
    image: Ludovic,
    social: {
      facebook: "/",
      inst: "/",
      link: "/",
      gmail: "ludovic@gmail.com",
    },
  },
  {
    name: "aziz",
    fullname: "Junaid Aziz",
    image: Aziz,
    social: {
      facebook: "/",
      inst: "/",
      link: "/",
      gmail: "ludovic@gmail.com",
    },
  },
  {
    name: "matilde",
    fullname: "Matilde Langevin",
    image: Mathilde,
    social: {
      facebook: "/",
      inst: "/",
      link: "/",
      gmail: "ludovic@gmail.com",
    },
  },
  {
    name: "vicky",
    fullname: "Vicky Hladynets",
    image: Vicky,
    social: {
      facebook: "/",
      inst: "/",
      link: "/",
      gmail: "ludovic@gmail.com",
    },
  },
];
