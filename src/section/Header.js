import React, { useState, useEffect } from "react";
import { Link, animateScroll } from "react-scroll";
import { Button, Container, Nav } from "react-bootstrap";
import Burger from "react-css-burger";
import "../style/navbar.css";
import FooterBrand from "../images/footer-brand.svg";
import Logo from "../images/logo.svg";

// export default function NavBar() {
//   const [state, setState] = useState({
//     active: false,
//   });

//   const open = () => setState(!open);

//   const scrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   return (
//     <nav className="navbar fixed-top">
//       <Container>
//         <div className="navbar-logo">
//           <img
//             src={Logo}
//             alt="Logo ISC"
//             className="img-fluid"
//             onClick={scrollToTop}
//           />
//         </div>
//         <div className={state.active ? "nav-items active" : "nav-items"}>
//           <div className="sidebar-brand text-center mt-3 d-block d-xl-none">
//             <Link to="banner" smooth={true}>
//               <img src={IscLogo} alt="sidebar logo" onClick={open} />
//             </Link>
//           </div>
//           <Link
//             activeClass="active"
//             to="wish"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             className="nav-link"
//             onClick={open}
//           >
//             Overview
//           </Link>
//           <Link
//             activeClass="active"
//             to="events"
//             spy={true}
//             smooth={true}
//             offset={-60}
//             duration={500}
//             className="nav-link"
//             onClick={open}
//           >
//             About Us
//           </Link>
//           <Link
//             activeClass="active"
//             to="programs"
//             spy={true}
//             smooth={true}
//             offset={-30}
//             duration={500}
//             className="nav-link"
//             onClick={open}
//           >
//             Feautured
//           </Link>
//           <Link
//             activeClass="active"
//             to="footer"
//             spy={true}
//             smooth={true}
//             offset={30}
//             duration={500}
//             className="nav-link"
//             onClick={open}
//           >
//             Price
//           </Link>
//           <div className="nav-button">
//             <Button variant="info mt-5 mt-xl-0 mr-0 mr-xl-2">
//               Registrasi Peserta
//             </Button>
//             <Button variant="outline-info mt-2 mt-xl-0">
//               Daftar Volunteer
//             </Button>
//           </div>
//         </div>
//         <Burger
//           onClick={() => setState({ active: !state.active })}
//           active={state.active}
//           burger="slider"
//           hoverOpacity={0.8}
//           scale={1.2}
//           style={{
//             height: "20px",
//             padding: "0",
//             margin: "0",
//           }}
//         ></Burger>
//       </Container>
//     </nav>
//   );
// }
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
          <div
            className="sidebar-brand text-center mt-5 mb-3 d-block d-xl-none"
            onClick={open}
          >
            <img src={FooterBrand} alt="sidebar logo" onClick={scrollToTop} />
          </div>
          <hr className="d-block d-xl-none text-center sidebar-line" />
          <Nav className="mr-auto flex-column flex-lg-row">
            <Link
              to="main"
              smooth={true}
              spy={true}
              offset={-80}
              className="nav-link"
              onClick={open}
            >
              Overview
            </Link>
            <Link
              to="about"
              smooth={true}
              spy={true}
              offset={-80}
              className="nav-link"
              onClick={open}
            >
              About Us
            </Link>
            <Link
              to="feautured"
              smooth={true}
              spy={true}
              offset={-80}
              className="nav-link"
              onClick={open}
            >
              Feautured
            </Link>
            <Link
              to="price"
              smooth={true}
              spy={true}
              offset={10}
              className="nav-link"
              onClick={open}
            >
              Price
            </Link>
          </Nav>
          <Nav className="d-block d-lg-flex">
            <Button
              variant="outline-light md-info px-4 rounded-lg   mt-5 mt-lg-0"
              href="#"
              className="nav-btn w-100"
            >
              Sign up
            </Button>
            <Button
              variant="light md-info px-4 rounded-lg mt-3 mt-lg-0"
              href="#"
              className="nav-btn w-100"
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
