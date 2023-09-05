import React from "react";

import "./TeamOptions.css";
import { motion } from "framer-motion";
import tcp from "../../assets/images/tcp.png";
import { Link } from "react-router-dom";

const TeamOptions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__team-options"
      id="speakers"
    >
      <div className="codeutsava__team-options-body">
        <div className="codeutsava__team-options-header-container">
          <img src={tcp} />
          <div className="codeutsava__team-options-main-title">
            &lt;Team TCP&gt;
          </div>
        </div>
        <div className="codeutsava__team-options-content-container">
          <Link className="codeutsava__team-options-button" to="/team/2023" state={{year: 2023}}>
            Team 2023 - 2024
          </Link>
          <Link className="codeutsava__team-options-button" to="/team/2022" state={{year: 2022}}>
            Team 2022 - 2023
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamOptions;
