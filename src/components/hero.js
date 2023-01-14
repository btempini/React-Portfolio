import React from "react";
import and from "../../public/assets/AND.png";

const Hero = () => {
  return (
    <section id="hero">
      <h2 id="design">Web Design</h2>
      <img src={and} alt="decorative" id="and" />
      <h2 id="development">Development</h2>
    </section>
  );
};

export default Hero;
