import React from "react";
import splash from "../images/splash.png";
import earthSplash from "../images/earth-splash.png";

const Contact = () => {
  return (
    <section className="container" id="contact">
      <h3>
        <span className="white">Contact</span> Me
      </h3>

      <div id="contactInfo">
        <a target="_blank" href="https://www.linkedin.com/in/bryantempini/">
          <img className="socialLogo" src="linkedin.png" alt="linkedin logo" />
        </a>

        <a target="_blank" href="https://github.com/btempini">
          <img className="socialLogo" src="github.png" alt="github logo" />
        </a>

        <a target="_blank" href="mailto: mistatempini@gmail.com">
          <img
            className="socialLogo"
            id="mailLast"
            src="gmail.png"
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
