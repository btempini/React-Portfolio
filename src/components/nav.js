import React from "react";
import { Link } from "react-router-dom";
import greenBanner from "../../public/assets/greenmultihighlight.png";

const Nav = () => {
  return (
    <nav>
      <div id="navContainer">
        <h1 id="name">Bryan Tempini</h1>
        <div id="linkContainer">
          <ul>
            <div className="linkWrapper">
              <li>
                <Link to="/about">
                  <p>About</p>
                </Link>
              </li>
              <div className="linkLine"></div>
            </div>
            <div className="linkWrapper">
              <li>
                <Link to="/work">
                  <p>Work</p>
                </Link>
              </li>
              <div className="linkLine"></div>
            </div>
            <div className="linkWrapper">
              <li>
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
              </li>
              <div className="linkLine"></div>
            </div>
            <div className="linkWrapper">
              <li>
                <a href="#">Resume</a>
              </li>
              <div className="linkLine"></div>
            </div>
          </ul>
        </div>
      </div>
      <img id="underlineName" src={greenBanner} alt="decoration" />
    </nav>
  );
};

export default Nav;
