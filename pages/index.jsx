import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Human from "../components/Human";
import Quote from "../components/Quote";
import Specs from "../components/Specs";
import Tech from "../components/Tech";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Human />
      <Specs />
      <About />
      <Quote />
      <Tech />
      <Footer />
    </div>
  );
};

export default Home;
