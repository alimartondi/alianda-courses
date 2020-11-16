import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button, Container } from "react-bootstrap";
import Burger from "react-css-burger";
import "../style/navbar.css";
import "../style/style.css";

export default function NavBar() {
  const [state, setState] = useState({
    active: false,
  });

  const open = () => setState(!open);

  const isOnTop = useScrollHandler();

  return (
    <header className="header-area" id="header">
      <nav className={`navbar ${isOnTop ? "" : "scrolled"}`}>
        <Container>
          <div className="navbar-logo">
            <h5>Our Logo</h5>
          </div>
          <div className={state.active ? "nav-items active" : "nav-items"}>
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
              Wish 3.0
            </Link>
            <Link
              activeClass="active"
              to="programs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={open}
            >
              Program
            </Link>
            <Link
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={open}
            >
              Event
            </Link>
            <Link
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-link"
              onClick={open}
            >
              Contact Us
            </Link>
            <Button variant="warning mt-3 mt-xl-0">Daftar Sekarang!</Button>
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
    </header>
  );
}

const useScrollHandler = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 2;
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
