import React from "react";
import aquaHighlight from "../images/aquamultihighlight.png";

const Work = () => {
  return (
    <section className="container" id="work">
      <h3>My Work</h3>
      <img className="underline" src={aquaHighlight} alt="decorative" />
      <div id="examplesContainer">
        <div id="projectThree">
          <div className="projectTitle">
            <h4>Dream Stream</h4>
          </div>
          <a
            href="https://dream-stream270.herokuapp.com/"
            className="projectLink"
            target="_blank"
          ></a>
        </div>
        <div className="workDescription">
          <p className="workDescriptionTitle">Languages</p>
          <p>
            Javascript, node.js (express, session, bcrypt, handlebars,
            sequelize), mySQL.
          </p>
          <p className="workDescriptionTitle">Role</p>
          <p>
            For this web app I was responsible for developing the back end. I
            built a custom API, created user relational database,
            authentication, password hashing, and route handlers.
          </p>
          <p className="workDescriptionTitle">Features</p>
          <p>
            Custom API, SQL Database, User Authentication, Hashed Password
            Storage, Session cookies
          </p>
        </div>

        <div id="project">
          <div className="projectTitle">
            <h4>Standard Services Group</h4>
          </div>
          <a
            href="https://www.standardservicesgroup.com/"
            className="projectLink"
            target="_blank"
          ></a>
        </div>
        <div className="workDescription">
          <p className="workDescriptionTitle">Languages</p>
          <p>Figma, Webflow</p>
          <p className="workDescriptionTitle">Role</p>
          <p>
            Freelance, Design, Develop, and Deploy a brand new website for a
            client.
          </p>
          <p className="workDescriptionTitle">Features</p>
          <p>
            SEO optimized, Fully Responsive, BeSpoke Design, Photo Gallery,
            Landing Page, Contact Form
          </p>
        </div>

        <div id="projectTwo">
          <div className="projectTitle">
            <h4>Advanced Tree Removal</h4>
          </div>
          <a
            href="https://www.advancedtreeremoval.org/"
            className="projectLink"
            target="_blank"
          ></a>
        </div>
        <div className="workDescription">
          <p className="workDescriptionTitle">Languages</p>
          <p>Figma, Webflow</p>
          <p className="workDescriptionTitle">Role</p>
          <p>
            Freelance, Design, Develop, and Deploy a brand new website for a
            client.
          </p>
          <p className="workDescriptionTitle">Features</p>
          <p>
            SEO optimized, Fully Responsive, Blog, BeSpoke Design, Photo
            Gallery, Landing Page, Contact Form
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
