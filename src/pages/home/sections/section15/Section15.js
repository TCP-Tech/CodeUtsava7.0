import React, { useState } from "react";
import "./Section15.css";
import { motion } from "framer-motion";

import glimpses from "../../../../assets/data/glimpsesData";
import ghost from "../../../../assets/images/ghost.png";

const Section15 = () => {
  const [activeId, setActiveId] = useState(1);
  const onClick = (id) => setActiveId(id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section15"
      id="analytics"
    >
      <div className="codeutsava__section15-title">
        Glimpses
        <img src={ghost}></img>
      </div>
      <div className="codeutsava__section15-glimpses-container">
        {glimpses.map((card, index) => {
          return (
            <div
              key={card.id}
              className={`codeutsava__section15-glimpses-panel ${
                activeId === card.id ? "active" : ""
              }`}
              onClick={() => onClick(card.id)}
              style={{ backgroundImage: `url(${card.imgSrc})` }}
            ></div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Section15;
