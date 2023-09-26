import React from "react";

import { useState, useEffect } from "react";

import "./Section4.css";
import speakers from "../../../../assets/data/speakersData.js";
import SpeakerCard from "../../../../components/speakerCard/SpeakerCard";
import { motion } from "framer-motion";

import { previousYear, baseUrl } from "../../../../constants";

import pumpkin from '../../../../assets/images/pumpkin.png'

import axios from "axios";

const Section4 = () => {
  const url = baseUrl + "speakers/" + previousYear;
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section4"
      id="speakers"
    >
      <div className="codeutsava__section4-body">
        <div className="codeutsava__section4-title">
          Speakers
          <img src={pumpkin}></img>
        </div>
        <div className="codeutsava__section4-speakers">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              img={speaker.img}
              name={speaker.name}
              position={speaker.position}
              description={speaker.description}
              facebook={speaker.facebook}
              twitter={speaker.twitter}
              linkedin={speaker.linkedin}
              github={speaker.github}
              youtube={speaker.youtube}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Section4;
