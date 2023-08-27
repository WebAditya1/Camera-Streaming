import React from "react";
import Home from "./Home/Home";
import Features from "./Features/Features";
import Faq from "./FAQ/Faq";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";

function HomePage() {
  return (
    <>
      <Home />
      <Features />
      <Faq />
      <Testimonials />
      <Contact/>
    </>
  );
}

export default HomePage;
