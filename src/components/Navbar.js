import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Container } from "react-bootstrap";
import Burger from "react-css-burger";

export default function NavBar() {
  const [state, setState] = useState({
    active: false,
  });

  const isOnTop = useScrollHandler();

  return (
    <header className="header-area" id="header">
      <nav className={`navbar ${isOnTop ? "" : "scrolled"}`}>
        <Container>
          <div className="navbar-logo">
            {/* <img src="" alt="" /> */}
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
            >
              Tentang
            </Link>
            <Link
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Events
            </Link>
            <Link
              activeClass="active"
              to="programs"
              spy={true}
              smooth={true}
              offset={120}
              duration={500}
              className="nav-link"
            >
              Program
            </Link>
            <Link
              activeClass="active"
              to="3section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Event
            </Link>
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
