import React from "react";

import "./Section6.css";

import sponsers from "../../assets/data/sponsersData.js";
import { motion } from "framer-motion";

const Section6 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section6"
      id="sponsers"
    >
      <div className="codeutsava__section6-body">
        <div className="codeutsava__section6-title">Sponsors</div>
        <div className="codeutsava__section6-content">
          On behalf of team TCP, we would like to publicly thank the generous
          sponsors without whom this event could not be held so smoothly.
        </div>
        <div className="codeutsava__section6-sponsers">
          <div className="codeutsava__section6-sponser-title">
            Platinum Sponsors
          </div>
          <div className="codeutsava__section6-sponser-list platinum">
            {sponsers.platinum.map((sponser, index) => (
              <div className="codeutsava__section6-sponser-image">
                <img key={index} src={sponser.img} />
              </div>
            ))}
          </div>
          <div className="codeutsava__section6-sponser-title">
            Gold Sponsors
          </div>
          <div className="codeutsava__section6-sponser-list gold">
            {sponsers.gold.map((sponser, index) => (
              <div className="codeutsava__section6-sponser-image">
                <img key={index} src={sponser.img} />
              </div>
            ))}
          </div>
          <div className="codeutsava__section6-sponser-title">Sponsors</div>
          <div className="codeutsava__section6-sponser-list bronze">
            {sponsers.silver.map((sponser, index) => (
              <div className="codeutsava__section6-sponser-image">
                <img key={index} src={sponser.img} />
              </div>
            ))}
          </div>
          {/* <div className="codeutsava__section6-sponser-title">
            Bronze Sponsors
          </div>
          <div className="codeutsava__section6-sponser-list bronze">
            {sponsers.bronze.map((sponser, index) => (
              <div className="codeutsava__section6-sponser-image">
                <img key={index} src={sponser.img} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Section6;
