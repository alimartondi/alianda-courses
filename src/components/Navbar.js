import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button, Container } from "react-bootstrap";
import Burger from "react-css-burger";
import "../style/navbar.css";
import "../style/style.css";
import IscLogo from "../images/isc_logo.png";
import Headroom from "react-headroom";

export default function NavBar() {
  const [state, setState] = useState({
    active: false,
  });

  const open = () => setState(!open);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Headroom className="header-area" id="header">
      <nav className="navbar">
        <Container>
          <div className="navbar-logo">
            <img
              src={IscLogo}
              alt="Logo ISC"
              className="img-fluid"
              onClick={scrollToTop}
            />
          </div>
          <div className={state.active ? "nav-items active" : "nav-items"}>
            <div className="sidebar-brand text-center mt-3 d-block d-xl-none">
              <Link to="banner" smooth={true}>
                <img src={IscLogo} alt="sidebar logo" onClick={open} />
              </Link>
            </div>
            <Link
              activeClass="active"
              to="wish"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={open}
            >
              WISH 3.0
            </Link>
            <Link
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className="nav-link"
              onClick={open}
            >
              EVENT
            </Link>
            <Link
              activeClass="active"
              to="programs"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="nav-link"
              onClick={open}
            >
              PROGRAM
            </Link>
            <Link
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
              className="nav-link"
              onClick={open}
            >
              CONTACT US
            </Link>
            <div className="nav-button">
              <Button variant="info mt-5 mt-xl-0 mr-0 mr-xl-2">
                Registrasi Peserta
              </Button>
              <Button variant="outline-info mt-2 mt-xl-0">
                Daftar Volunteer
              </Button>
            </div>
          </div>
          <Burger
            onClick={() => setState({ active: !state.active })}
            active={state.active}
            burger="slider"
            hoverOpacity={0.8}
            scale={1.2}
            style={{
              height: "20px",
              padding: "0",
              margin: "0",
            }}
          ></Burger>
        </Container>
      </nav>
    </Headroom>
  );
}
