import React from "react";
import "./TeamCard4.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import grave from "../../assets/images/Grave.svg";
import av from "../../assets/data/h";
const TeamCard4 = ({name, position, linkedin, domain }) => {
  return (
    
<div className="codeutsava__team-card4">
      
    <div className="codeutsava__team-card4-content">
        <h2>{name}</h2>
            <div className="codeutsava__team-card4-content-line"></div>
        <h3 className="codeutsava__team-card4-content-domain">
            {domain}
        </h3>

    </div>

    <img src={grave} className="codeutsava__team-card4-img-grave" />

    <div className="codeutsava__team-card4-social">
        <div className="codeutsava__team-card4-social-ln">
            <a
                href={linkedin}
                target="_blank"
                className="fa fa-linkedin"
                aria-hidden="true"
            >
            </a>
        
        </div>
        
      </div>
       
      
      
       
</div>

  );
};

export default TeamCard4;
