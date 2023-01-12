import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div id="navContainer">
        <h1 id="name">Bryan Tempini</h1>
        <div id="linkContainer">
          <ul>
            <div className="linkWrapper">
              <li>
                {/* <a href="#about">About</a> */}
                <Link to="/about">
                  <p>About</p>
                </Link>
              </li>
              <div className="linkLine"></div>
            </div>
            <div className="linkWrapper">
              <li>
                <a href="#work">Work</a>
              </li>
              <div className="linkLine"></div>
            </div>
            <div className="linkWrapper">
              <li>
                <a href="#contact">Contact</a>
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
      <img id="underlineName" src="greenmultihighlight.png" alt="decoration" />
    </nav>
  );
};

export default Nav;
