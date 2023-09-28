import React from "react";
import "./EventCard.css";
import spiderWeb from "../../assets/images/spider-web.svg";
const EventCard = ({ img, title, date, link }) => {
  return (
    <div className="codeutsava__section3-card">
      <div className="codeutsava__section3-decor-web one"><img src={spiderWeb} alt="spiderweb" /></div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="codeutsava__section3-image" src={img} alt="" style={{cursor:"pointer"}}/>
        </a>      
      <div className="codeutsava__section3-content">
        <div className="codeutsava__section3-cardTitle">{title}</div>
        <div className="codeutsava__section3-divider"></div>
        <div className="codeutsava__section3-date">{date}</div>
      </div>
    </div>
  );
};

export default EventCard;
