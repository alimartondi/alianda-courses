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
          <Nav className="mr-auto flex-column flex-lg-row">
            <Link
              to="feautured"
              smooth={true}
              spy={true}
              offset={-120}
              className="nav-link"
              onClick={open}
            >
              Feautures
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
            {/* <Link
              to="category"
              smooth={true}
              spy={true}
              offset={-70}
              className="nav-link"
              onClick={open}
            >
              Category
            </Link> */}
            <Link
              to="tools"
              smooth={true}
              spy={true}
              offset={-100}
              className="nav-link"
              onClick={open}
            >
              Application
            </Link>
            <Link
              to="price"
              smooth={true}
              spy={true}
              offset={-100}
              className="nav-link"
              onClick={open}
            >
              Price
            </Link>
          </Nav>
          <Nav className="nav-btn d-block d-lg-flex flex-lg-nowrap">
            <Button
              variant="outline-light md-info px-4 px-md-2 rounded-lg mt-5 mt-lg-0"
              href="/"
              className="second-button"
            >
              Sign up
            </Button>
            <Button
              variant="main-button"
              href="/"
              className="main-button px-4 px-md-2 rounded-lg mt-2 mt-lg-0 ml-lg-2"
            >
              Login
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
