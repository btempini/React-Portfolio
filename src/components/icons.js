import React from "react";
// import nodeIcon from "../assets/node.png";
// import htmlIcon from "../assets/";
// import cssIcon from "../assets/css.png";
// import javaScriptIcon from "../assets/javascript.png";
// import atomIcon from "../assets/atom.png";
// import sqlIcon from "../assets/sql.png";
// import mongoIcon from "../assets/mongodb.png";

const Icons = () => {
  return (
    <div id="icons">
      <img class="languageIcon" src="images/htmlIcon.png" alt="html5 icon" />
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
