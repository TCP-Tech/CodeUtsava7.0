import React from "react";

import "./Section10.css";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const section10 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section10"
      id="my-team"
    >
      <div className="codeutsava__section10-body">
        <div className="codeutsava__section10-title">
          Wondering who all make this possible?
        </div>
        <button className="codeutsava__section10-button">
          <Link to="/team">Meet our Team</Link>
        </button>
      </div>
    </motion.div>
  );
};

export default section10;
