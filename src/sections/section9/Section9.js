import React from "react";

import Prizes from "../../assets/data/PrizesData";
import PrizeBox from "../../components/prizeBox/PrizeBox.js";
import { motion } from "framer-motion";

import "./Section9.css";

const Section9 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section9"
    >
      <div className="codeutsava__section9-title">
        <div className="codeutsava__section9-title1">Prizes</div>
        <div className="codeutsava__section9-title2">
          Win exciting prizes worth upto 15 lakhs
        </div>
      </div>
      <div className="codeutsava__section9-body">
        <div className="codeutsava__section9-description">
          {Prizes.map((info, index) => (
            <PrizeBox
              key={index}
              title={info.title}
              prizeInfo={info.prizeInfo}
              cashPrize={info.cashPrize}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Section9;
