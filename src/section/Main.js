import React from "react";
import "../App.css";
import Category from "../components/Category";
import Feautured from "../components/Feautured";
import Class from "../components/Class";
import Hero from "../components/Hero";
import PricingPlans from "../components/Price";
import RegisterSection from "../components/Register";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import Tools from "../components/Tools";

export default function Main() {
  return (
    <div className="main">
      <Hero />
      <Feautured />
      <About />
      {/* <Category /> */}
      <Tools />
      {/* <Class /> */}
      <PricingPlans />
      <RegisterSection />
      <Testimonial />
    </div>
  );
}
