import React from "react";
import "./TeamCard3.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import spider from "../../assets/images/spider.svg";
import pumpkin from "../../assets/images/pumpkin.svg";

const TeamCard3 = ({ img, name, position, linkedin, email, domain }) => {
  return (
    <div className="codeutsava__team-card3">
      <div className="codeutsava__team-card3-ds-top"></div>
      <div className="codeutsava__team-card3-spider">
        <img src={spider} className="codeutsava__team-card3-spider-img" />
      </div>
      <div className="codeutsava__team-card3-avatar-holder">
        <img src={img} className="codeutsava__team-card3-avatar-holder-img" />
      </div>
      <div className="codeutsava__team-card3-content">
        <h2>{name}</h2>
        <h2 className="position">{position}</h2>
      </div>
      <div className="codeutsava__team-card3-pumpkin">
        <img
          src={pumpkin}
          className="codeutsava__team-card3-pumpkin-img"
        />
      </div>
      <div className="codeutsava__team-card3-social">
        <a
          href={`mailto:${email}`}
          target="_blank"
          className="fa fa-envelope"
          aria-hidden="true"
        ></a>
        <a
          href={linkedin}
          target="_blank"
          className="fa fa-linkedin"
          aria-hidden="true"
        ></a>
      </div>
    </div>
  );
};

export default TeamCard3;
