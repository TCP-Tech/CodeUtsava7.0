import React from "react";

import "./Team.css";

import overAllCoordinaters from "../../assets/data/overAllCoordinatorsData";
import headCoordinaters from "../../assets/data/headCoordinatorsData";
import managers from "../../assets/data/managersData";
import executives from "../../assets/data/executivesData";

import TeamCard from "../../components/teamCard/TeamCard";
import TeamCard2 from "../../components/teamCard2/TeamCard2";
import TeamCard3 from "../../components/teamCard3/TeamCard3";
import { motion } from "framer-motion";

import tcp from "../../assets/images/tcp.png";

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__team"
      id="speakers"
    >
      <div className="codeutsava__team-body">
        <div className="codeutsava__team-header-container">
          <img src={tcp} />
          <div className="codeutsava__team-main-title">
            &lt;Team TCP 2022&gt;
          </div>
        </div>
        <div className="codeutsava__team-title">Overall Coordinators</div>
        <div className="codeutsava__team-members">
          {overAllCoordinaters.slice(0, 1).map((member, index) => (
            <TeamCard3
              key={index}
              img={member.Photo}
              name={member.Name}
              position={member.Designation}
              linkedin={member.linkedin}
              domain={member.Domain}
            />
          ))}
        </div>
        <div className="codeutsava__team-members">
          {overAllCoordinaters.slice(1).map((member, index) => (
            <TeamCard3
              key={index}
              img={member.Photo}
              name={member.Name}
              position={member.Designation}
              linkedin={member.linkedin}
              domain={member.Domain}
            />
          ))}
        </div>
        <div className="codeutsava__team-title">Head Coordinators</div>
        <div className="codeutsava__team-members">
          {headCoordinaters.map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              position={member.Designation}
              linkedin={member.linkedin}
              domain={member.Domain}
            />
          ))}
        </div>
        <div className="codeutsava__team-title">Managers</div>
        <div className="codeutsava__team-members">
          {managers.map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              position={member.Designation}
              linkedin={member.linkedin}
              domain={member.Domain}
            />
          ))}
        </div>
        <div className="codeutsava__team-title">Executives</div>
        <div className="codeutsava__team-members">
          {executives.map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              position={member.Designation}
              linkedin={member.linkedin}
              domain={member.Domain}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
