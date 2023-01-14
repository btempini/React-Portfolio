import React from "react";
import nodeIcon from "./images/node.png";
import htmlIcon from "./images/htmlIcon.png";
import cssIcon from "./images/css.png";
import javaScriptIcon from "../images/javascript.png";
import atomIcon from "./images/atom.png";
import sqlIcon from "./images/sql.png";
import mongoIcon from "./images/mongodb.png";

const Icons = () => {
  return (
    <div id="icons">
      <img class="languageIcon" src={htmlIcon} alt="html5 icon" />
      <img class="languageIcon" src={cssIcon} alt="css icon" />
      <img class="languageIcon" src={javaScriptIcon} alt="javascript icon" />
      <img class="languageIcon" src={nodeIcon} alt="node icon" />
      <img class="languageIcon" src={atomIcon} alt="react icon" />
      <img class="languageIcon" src={sqlIcon} alt="sql icon" />
      <img class="languageIcon" src={mongoIcon} alt="mongo icon" />
    </div>
  );
};

export default Icons;
