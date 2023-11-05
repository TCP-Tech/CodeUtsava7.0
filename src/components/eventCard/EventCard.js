import leftarrow from "../../assets/images/left-arrow.png";
import rightarrow from "../../assets/images/finalarrowright.png";
import "./EventCard.css";
import EventsData from "../../assets/data/eventsData";
import { useState } from "react";

export const EventCard = () => {
  const [index, setIndex] = useState(0);
  const leftBtnClick = () => {
    if (index === 0) setIndex(EventsData.length - 1);
    else setIndex(index - 1);
  };
  const rightBtnClick = () => {
    if (index === EventsData.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <div className="codeutsava__section3-card">
      <div className="arrows">
        <div className="arrow-1 arrow" onClick={() => leftBtnClick()}>
          <img src={leftarrow} alt="" />
        </div>
        <div className="arrow-2 arrow" onClick={() => rightBtnClick()}>
          <img src={rightarrow} alt="" />
        </div>
      </div>
      <div className="gallery">
        <div className="gallery-viewer">
          <img src={EventsData[index].img} alt="" />
        </div>
      </div>
      <div className="line-gallery"></div>
      <div className="dets">
        <div className="dets-top dets-section">
          <div className="restaurant-ki-list">
            <h1>{EventsData[index].title}</h1>
          </div>
          <div className="res-desc">
            <h5>
              {" "}
              <p>DESCRIPTION</p> {EventsData[index].desc}
            </h5>
          </div>
          {EventsData[index].guidelines && (
            <div className="res-desc">
              <h5>
                {" "}
                <p>GUIDELINES</p>
                {EventsData[index].guidelines}
              </h5>
            </div>
          )}
        </div>
        <div className="dets-bottom dets-section">
          <div className="details">
            <div className="head-blocks dimension">
              <h1>DATE</h1>
              <div className="dimensions-list vals">
                <h1>{EventsData[index].date}</h1>
              </div>
            </div>
            <div className="head-blocks dimension">
              <h1>TIME</h1>
              <div className="dimensions-list vals">
                <h1>{EventsData[index].time}</h1>
              </div>
            </div>
            <div className="head-blocks dimension">
              <h1>VENUE</h1>
              <div className="dimensions-list vals">
                <h1>{EventsData[index].venue}</h1>
              </div>
            </div>
          </div>
          <a
            className="codeutsava__events-register-link"
            href={EventsData[index].link}
            target="_blank"
            rel="noreferrer"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
