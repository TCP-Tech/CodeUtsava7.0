import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Events.css";
import EventCard from "../../components/eventCard/EventCard";
import EventData from "../../assets/data/eventsData";
import { previousYear, baseUrl } from "../../constants";
import frank from "../../assets/images/frakenstein.png";
import Footer from "../../components/footer/Footer";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import IntroAudio from "../../components/introAudio/IntroAudio";
import axios from "axios";
import downArrow from "../../assets/images/downArrow.svg";

const Events = () => {
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

  return (
    <div className="bg-image" id="home">
      <div className="codeutsava__navbar-container">
        <NavbarTeam />
      </div>
      <div className="container mx-auto main-container">
        <div className="codeutsava__section3" id="events">
          <div className="codeutsava__section3-title">
            <img src={frank}></img>
            Events
          </div>
          <div className="codeutsava__section3-events-container">
            {/* {EventData.map((event, index) => (  
              <EventCard
                key={index}
                img={event.img}
                title={event.title}
                date={event.date}
                link={event.link}
              />
            // ))} */}
              <EventCard />
          </div>
        </div>
      </div>
      <div className="intro_audio_new_design">
        <IntroAudio />
      </div>
      <div className="codeutsava__footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Events;
