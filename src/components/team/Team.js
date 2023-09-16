import React from "react";
import { useState, useEffect } from "react";
import "./Team.css";

import Footer from "../../components/footer/Footer"

import TeamCard from "../teamCard/TeamCard";
import TeamCard3 from "../teamCard3/TeamCard3";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import downArrow from "../../assets/images/downArrow.svg";

import axios from "axios";

import { baseUrl } from "../../constants";

import tcp from "../../assets/images/tcp.png";
import TeamCard3_2023 from "../TeamCard3_2023/TeamCard3_2023";


const Team = ({year}) => {

  const url = baseUrl + "team/" + year;

  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(url);
      setState({
        data: data.data[0].data,
        loading: false,
      });
    };
    fetchData();
  }, []);
  
  const overAllCoordinaters = state.data.filter((member) => member.Designation == "Overall Coordinator")
  const headCoordinaters = state.data.filter((member) => member.Designation == "Head Coordinator" || member.Designation == "Domain Lead")
  const managers = state.data.filter((member) => member.Designation == "Manager")
  const executives = state.data.filter((member) => member.Designation == "Executive")

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
            &lt;Team TCP {year}&gt;
          </div>
        </div>
          <Link className="codeutsava__team-options-button" to="/team" style={{marginTop: '2rem'}}>
            <img src={downArrow} />
            Previous Year Teams
          </Link>
        <div className="codeutsava__team-title">Overall Coordinators</div>
        <div className="codeutsava__team-members">
          {overAllCoordinaters.map((member, index) => (
            <TeamCard3
              key={index}
              email={member.Email}
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
          {/* {managers.map((member, index) => (
            // <TeamCard
            //   key={index}
            //   img={member.Photo}
            //   name={member.Name}
            //   position={member.Designation}
            //   linkedin={member.linkedin}
            //   domain={member.Domain}
            // />
            <TeamCard_2023/>
            
          ))} */}
          <TeamCard3_2023/>
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
      <div className="codeutsava__footer-container">
          <Footer />
      </div>
    </motion.div>
  );
};

export default Team;
