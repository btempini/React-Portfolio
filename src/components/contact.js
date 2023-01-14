import React from "react";
import splash from "../images/splash.png";
import earthSplash from "../images/earth-marker.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import gmail from "../images/gmail.png";

const Contact = () => {
  return (
    <section className="container" id="contact">
      <h3>
        <span className="white">Contact</span> Me
      </h3>

      <div id="contactInfo">
        <a target="_blank" href="https://www.linkedin.com/in/bryantempini/">
          <img className="socialLogo" src={linkedin} alt="linkedin logo" />
        </a>

        <a target="_blank" href="https://github.com/btempini">
          <img className="socialLogo" src={github} alt="github logo" />
        </a>

        <a target="_blank" href="mailto: mistatempini@gmail.com">
          <img
            className="socialLogo"
            id="mailLast"
            src={gmail}
            alt="gmail logo"
          />
        </a>
        <img className="splash" src={splash} alt="paint splash" />
        <img className="earth" src={earthSplash} alt="decorative" />
      </div>
    </section>
  );
};

export default Contact;
