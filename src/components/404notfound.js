import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

export default function NotFoundScreen() {
  return (
    <section className="notfound-area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="notfound-content text-center">
              <h2 className="oops">Oops..!</h2>
              <h1 className="notfound-404">404</h1>
              <p className="notfind">
                We could not find the page you were looking for.
              </p>
              <Button variant="outline-dark mt-5" href="/">
                Go Back Home
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
