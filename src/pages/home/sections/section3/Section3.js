import React from "react";

import { useState, useEffect, useRef } from "react";

import "./Section3.css";

import EventCard from "../../../../components/eventCard/EventCard";
import Slider from "react-slick";
import { sliderSettings } from "../../../../motionUtils";

import Events from "../../../../assets/data/eventsData";

import { previousYear, baseUrl } from "../../../../constants";

import frank from "../../../../assets/images/frakenstein.png";

import axios from "axios";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Section3 = () => {
  const url = baseUrl + "events/" + previousYear;
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  console.log(url);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(url);
      setState({
        data: data.data.data,
        loading: false,
      });
    };
    fetchData();
  }, []);

  console.log(state.data);

  const [currentIndex, setCurrentIndex] = useState(0)
  const timeRef = useRef(null);

  const carousalStyle = {
    height: "100%",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: "1.2rem",
    border: "1px solid #f1f1f1aa",
  };

  const slidesOverflow = {
    overflow: "hidden",
    height: "100%",
  };

  const getSlidesStyle = () => {
    if (window.innerWidth>1300)
    return ({
      display: "flex",
      height: "auto",
      transition: "transform ease-out 0.3s",
      width: `${(100 * Events.length)/3}%`,
      transform: `translateX(${-(
        currentIndex *
        (100 / Events.length)
      )}%)`,
    })
    
    if (window.innerWidth>1025)
    return ({
      display: "flex",
      height: "100%",
      transition: "transform ease-out 0.3s",
      width: `${(100 * Events.length)/2}%`,
      transform: `translateX(${-(
        currentIndex *
        (100 / Events.length)
      )}%)`,
    })

    if (window.innerWidth>450)
    return ({
      display: "flex",
      height: "100%",
      transition: "transform ease-out 0.3s",
      width: `${(100 * Events.length)}%`,
      transform: `translateX(${-(
        currentIndex *
        (100 / Events.length)
      )}%)`,
    })

    return ({
      display: "flex",
      height: "100%",
      transition: "transform ease-out 0.3s",
      width: `${(100 * Events.length)}%`,
      transform: `translateX(${-(
        currentIndex *
        (100 / Events.length)
      )}%)`,
    })
  };

  const goToPrevious = () => {
    if (window.innerWidth>1300){
      const isFirst = currentIndex === 0;
      const newIndex = isFirst ? Events.length - 3 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
    else if (window.innerWidth>1025){
      const isFirst = currentIndex === 0;
      const newIndex = isFirst ? Events.length - 2 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
    else {  
      const isFirst = currentIndex === 0;
      const newIndex = isFirst ? Events.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (window.innerWidth>1300)
    {
      const isLast = currentIndex === Events.length - 3;
      const newIndex = isLast ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
    else if (window.innerWidth>1025){
      const isLast = currentIndex === Events.length - 2;
      const newIndex = isLast ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
    else {
      const isLast = currentIndex === Events.length - 1;
      const newIndex = isLast ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  const leftArrowStyle = {
    position: "absolute",
    top: "40%",
    opacity: "0.5",
    cursor: "pointer",
    zIndex: 1,
    left: "32px"
  }
  
  const rightArrowStyles = {
    position: "absolute",
    top: "40%",
    opacity: "0.5",
    cursor: "pointer",
    zIndex: 1,
    right: "32px"
  }

  useEffect (() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      
      goToNext();
    }, 2000);
  })

  return (
    <div
      className="codeutsava__section3"
      id="events"
    >
      <div className="codeutsava__section3-title">
        <img src={frank}></img>
        Events
      </div>
      <div className="codeutsava__section3-events-container">
        <div style={carousalStyle} className="slider">
          <div style={slidesOverflow}>
            <div style={getSlidesStyle()}>
              {Events.map((event, index) => (
                <EventCard
                  key={index}
                  img={event.img}
                  title={event.title}
                  date={event.date}
                  link={event.link}
                />
              ))}
            </div>
          </div>
          <div style = {leftArrowStyle} onClick= {() => goToPrevious()}>
                <AiOutlineLeft
                  className="hover:bg-black"
                  size = {"60px"}
                  color = {"grey"}
                />
             </div>
             <div style = {rightArrowStyles} onClick= {() => goToNext()}>
                <AiOutlineRight
                  className="hover:bg-black"
                  size = {"60px"}
                  color = {"grey"}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
