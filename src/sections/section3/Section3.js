import React from "react";

import "./Section3.css";

import events from "../../assets/data/eventsData.js";
import EventCard from "../../components/eventCard/EventCard";
import Slider from "react-slick";
import { sliderSettings } from "../../motionUtils";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section3"
      id="events"
    >
      <div className="codeutsava__section3-title">Events</div>
      <div className="codeutsava__section3-events-container">
        <Slider {...sliderSettings} className="slider">
          {events.map((event, key) => (
            <EventCard
              index={key}
              img={event.img}
              title={event.title}
              date={event.date}
              link={event.link}
            />
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Section3;
