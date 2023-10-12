import leftarrow from "../../assets/images/left-arrow.png";
import rightarrow from "../../assets/images/finalarrowright.png";
import "./EventCard.css";
import { gsap, Expo } from "gsap";
import EventsData from "../../assets/data/eventsData";
import { useLayoutEffect, useRef, useState } from "react";

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

  // GSAP Animations
  const eventName = useRef();
  const rating = useRef();
  const price = useRef();
  const dims = useRef();
  const eventImage = useRef();
  const desc = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      [eventName.current, rating.current, price.current, dims.current],
      { y: -100, ease: Expo.easeInOut },
      { y: 0, ease: Expo.easeInOut, duration: 1 }
    );

    gsap.fromTo(
      eventImage.current,
      { xPercent: -100, ease: Expo.easeInOut },
      { xPercent: 0, ease: Expo.easeInOut, duration: 1 }
    );

    gsap.fromTo(
      desc.current,
      { opacity: 0, ease: Expo.easeInOut },
      { opacity: 1, ease: Expo.easeInOut, duration: 1.5 }
    );
  });

  return (
    <div className="hotel-view">
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
          <img ref={eventImage} src={EventsData[index].img} alt="" />
        </div>
      </div>
      <div className="dets">
        <div className="dets-top dets-section">
          <div className="restaurant-ki-list">
            <h1 ref={eventName}>{EventsData[index].title}</h1>
          </div>
          <div className="res-desc">
            <h5 ref={desc}>{EventsData[index].link}</h5>
          </div>
        </div>
        <div className="dets-bottom dets-section">
          <div className="details">
            <div className="head-blocks rating">
              <h1>RATING</h1>
              <div className="rating-list vals">
                {/* <h1 ref={rating}>{EventsData[index].date}</h1> */}
              </div>
            </div>
            <div className="head-blocks price">
              <h1>PRICE</h1>
              <div className="price-list vals">
                <h1 ref={price}>
                  {/* {EventsData[index].} */}
                  <sub>/day</sub>
                </h1>
              </div>
            </div>
            <div className="head-blocks dimension">
              <h1>DATE</h1>
              <div className="dimensions-list vals">
                <h1 ref={dims}>
                  {EventsData[index].date}
                  {/* <sub>sq.ft.</sub> */}
                </h1>
              </div>
            </div>
          </div>
          <div className="book-now">
            <h3>Book now</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
