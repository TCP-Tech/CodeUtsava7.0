import React from "react";

import "./TeamCard1_2023.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const TeamCard1_2023 = ({
  img,
  name,
  position,
  facebook,
  twitter,
  linkedin,
  github,
  domain,
}) => {
  return (
    <div className="codeutsava__team-card1_2023">
     <div id="dfg"></div>
      <div className="codeutsava__team-card1_2023-img">
        <img src={img} />
      </div>
      <div className="codeutsava__team-card1_2023-content">
        <h3 className="name">{name}</h3>
        <h4 className="title">{position}</h4>
        <h4 className="domain">{domain}</h4>
      </div>
      <ul className="social">
        {/* <li>
          <a href="" className="fa fa-facebook" aria-hidden="true"></a>
        </li> */}
        {/* <li>
          <a href="" className="fa fa-twitter" aria-hidden="true"></a>
        </li> */}
        {/* <li>
          <a href="" className="fa fa-github" aria-hidden="true"></a>
        </li> */}
        <li>
          <a href={linkedin} target="_blank" className="fa fa-linkedin" aria-hidden="true"></a>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard1_2023;
