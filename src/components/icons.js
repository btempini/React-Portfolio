import React from "react";
import nodeIcon from "../../public/assets/node.png";
import htmlIcon from "../../public/assets/htmlIcon.png";
import cssIcon from "../../public/assets/css.png";
import javaScriptIcon from "../../public/assets/javascript.png";
import atomIcon from "../../public/assets/atom.png";
import sqlIcon from "../../public/assets/sql.png";
import mongoIcon from "../../public/assets/mongodb.png";

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
