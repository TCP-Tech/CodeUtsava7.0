import React from "react";

import "./Section2.css";

import WordGlobe from "../../components/wordGlobe/WordGlobe";

import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: {duration: 1} }}
      viewport={{ once: false}}
      className="codeutsava__section2"
      id="aboutus"
    >
      <div className="codeutsava__section2-body">
        <div className="codeutsava__section2-title">About Us</div>
        <div className="codeutsava__section2-menu">
          <div className="codeutsava__section2-wordglobe">
            <WordGlobe />
          </div>
          <div className="codeutsava__section2-content">
            <span style={{ color: "#38b6ff" }}>CodeUtsava 6.0</span> is an event
            being organized by Turing Club of Programmers, the Official Coding
            Club of NIT Raipur. It aims to foster and nurture invigorating
            coding culture among the students of the Institute through its
            Mentorship programme, workshops, and along with several other events
            including the annual event CodeUtsava. Students from all over India
            can take part in this event, attend Workshops, participate in the
            Hackathon, and various other coding related activities which are
            organized under this event.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section2;
