import React from "react";
import About from "../components/About";
import Advantages from "../components/Advant";
import Feautured from "../components/Feautured";
import Hero from "../components/Hero";
import PricingPlans from "../components/Price";
import Teams from "../components/Team";
import Testimonial from "../components/Testimonial";

export default function Main() {
  return (
    <div className="main">
      <Hero />
      <Advantages />
      <About />
      <Feautured />
      <PricingPlans />
      <Testimonial />
      {/* <Teams /> */}
    </div>
  );
}
