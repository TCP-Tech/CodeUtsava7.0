import React from "react";
import { useState, useEffect } from "react";
import "./Speakers.css";
import speakers from "../../assets/data/speakersData.js";
import SpeakerCard from "../../components/speakerCard/SpeakerCard";
import { previousYear, baseUrl } from "../../constants";
import Footer from "../../components/footer/Footer";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import IntroAudio from "../../components/introAudio/IntroAudio";
import pumpkin from '../../assets/images/pumpkin.png'

import axios from "axios";

const Speakers = () => {
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
    <div className="bg-image">
      <div className="codeutsava__navbar-container">
        <NavbarTeam />
      </div>
      <div className="container mx-auto main-container">
      <div
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
    </div>
      </div>
      <div className="intro_audio_new_design">
        <IntroAudio />
      </div>
      <div className="codeutsava__footer-container">
        <Footer />
      </div>
    </div>
    
  );
};

export default Speakers;
