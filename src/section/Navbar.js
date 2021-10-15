import React, { useState, useEffect } from "react";
import { Link, animateScroll } from "react-scroll";
import { Button, Container, Nav } from "react-bootstrap";
import Burger from "react-css-burger";
import "../style/navbar.css";
import FooterBrand from "../images/footer-brand.svg";
import Logo from "../images/logo.svg";

export default function NavBar() {
  const [state, setState] = useState({
    active: false,
  });

  const isOnTop = useScrollHandler();

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const open = () => setState(!open);

  return (
    <nav className={`navbar ${isOnTop ? "" : "scrolled"}`}>
      <Container>
        <div className="navbar-brand">
          <img src={Logo} alt="Logo" onClick={scrollToTop} />
        </div>
        <div className={state.active ? "nav-items active" : "nav-items"}>
          <div className="sidebar-brand text-center mt-5 mb-3" onClick={open}>
            <img src={FooterBrand} alt="sidebar logo" onClick={scrollToTop} />
          </div>
          <hr className="d-block d-xl-none text-center sidebar-line" />
          <Nav className="ml-lg-auto flex-column flex-lg-row">
            <Link
              to="feature"
              smooth={true}
              spy={true}
              offset={-120}
              className="nav-link"
              onClick={open}
            >
              Features
            </Link>
            <Link
              to="about"
              smooth={true}
              spy={true}
              offset={-100}
              className="nav-link"
              onClick={open}
            >
              About
            </Link>
            <Link
              to="course"
              smooth={true}
              spy={true}
              offset={-180}
              className="nav-link"
              onClick={open}
            >
              Courses
            </Link>

            <Link
              to="application"
              smooth={true}
              spy={true}
              offset={-160}
              className="nav-link"
              onClick={open}
            >
              Application
            </Link>
            <Link
              to="testimonial"
              smooth={true}
              spy={true}
              offset={-120}
              className="nav-link"
              onClick={open}
            >
              Testimonial
            </Link>
          </Nav>
          <Nav className="nav-btn d-block d-lg-flex flex-lg-nowrap">
            <Button
              variant="main-button"
              href="/"
              className="rounded-pill mt-5 mt-lg-0"
            >
              Sign in
            </Button>
          </Nav>
        </div>
        <Burger
          onClick={() => setState({ active: !state.active })}
          active={state.active}
          burger="spin"
          color="white"
          hoverOpacity={0.8}
          scale={1.2}
          style={{
            height: "20px",
            padding: "0",
            margin: "0",
          }}
        />
      </Container>
    </nav>
  );
}

// ===On Scroll Logic===
const useScrollHandler = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 8;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
