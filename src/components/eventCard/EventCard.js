import React from "react";
import "./EventCard.css";
const EventCard = ({ img, title, date, link }) => {
  return (
      <div className="codeutsava__section3-card">
        <img className="codeutsava__section3-image" src={img} alt=""/>  
        <div className="codeutsava__section3-content">
          <div className="codeutsava__section3-cardTitle">{title}</div>
          <div className="codeutsava__section3-divider"></div>
          <div className="codeutsava__section3-date">{date}</div>
          <a className="codeutsava__section3-link" href={link} target="_blank" rel="noreferrer">Register Now</a>
        </div>
      </div>
  );
};

export default EventCard;
