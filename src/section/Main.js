import React from "react";
import About from "../components/About";
import Advantages from "../components/Advant";
import Feautured from "../components/Feautured";
import Hero from "../components/Hero";
import PricingPlans from "../components/Price";
import Faq from "../components/Question";
import RegisterSection from "../components/Register";
import Teams from "../components/Team";
import Testimonial from "../components/Testimonial";

export default function Main() {
  return (
    <div className="main">
      <Hero />
      <Advantages />
      <Feautured />
      <About />
      <PricingPlans />
      <Testimonial />
      <Teams />
      <Faq />
      {/* <RegisterSection /> */}
    </div>
  );
}
