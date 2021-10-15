import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import About from "../components/About";
import Course from "../components/Course";
import Application from "../components/Application";
import Testimonial from "../components/Testimonial";

export default function Main() {
  return (
    <div className="main">
      <Hero />
      <Feature />
      <About />
      <Course />
      <Application />
      <Testimonial />
    </div>
  );
}
