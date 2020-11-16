import React from "react";
import { Container } from "react-bootstrap";
import Slider from "./Banner";

export default function BannerSection() {
  return (
    <section className="banner-area" id="banner">
      <Container fluid className="px-0">
        <Slider />
      </Container>
      {/* <Container>
        <div className="banner-content">
          <h5 className="subtitle mt-5">World Indonesia Scholarship</h5>
          <h1 className="main-title mt-3">
            The Biggest Scholarship &amp; Education Event in Indonesia
          </h1>
          <h5 className="subtitle">
            Mewujudkan Pemerataan Informasi &amp; Kesempatan Beasiswa bagi
            seluruh Rakyat Indonesia.
          </h5>
          <div className="banner-logos d-flex mt-5">
            <div className="wish-lokalate">
              <h5>Logo Wish</h5>
              <Button variant="outline-light px-3">Register</Button>
            </div>
            <div className="wish-online ml-5">
              <h5>Wish Logo</h5>
              <Button variant="outline-light px-3">Register</Button>
            </div>
          </div>
        </div>
      </Container> */}
    </section>
  );
}
