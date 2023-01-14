import React from "react";
import aquaHighlight from "../images/aquamultihighlight.png";
import user from "../images/user.jpg";

const About = () => {
  return (
    <section className="container" id="about">
      <h3>About</h3>
      <img className="underline" src={aquaHighlight} alt="decorative" />
      <div>
        <img className="avatar" src={user} alt="avatar" />
        <p>
          Welcome to my professional portfolio! My name is Bryan Tempini, and I
          am a software developer leveraging seven years of experience as a
          master Harley Davidson technician, and I am excited to be
          transitioning into the world of web design and development. In this
          portfolio, you will find a selection of my skills and projects,
          showcasing my passion for problem-solving and technology. Thank you
          for taking the time to visit and learn more about me. I am always
          looking to grow and improve, and I am eager to learn from others in
          the field. Please feel free to contact me with any questions or
          comments.
        </p>
      </div>
    </section>
  );
};

export default About;
