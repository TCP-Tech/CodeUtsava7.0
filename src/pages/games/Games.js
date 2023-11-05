import React from 'react'
import './Games.css'
import GameCard from '../../components/gameCard/GameCard'
import { useState, useEffect, useRef } from "react";
import frank from "../../assets/images/frakenstein.png";
import Footer from "../../components/footer/Footer";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import IntroAudio from "../../components/introAudio/IntroAudio";

const Merchandise = () => {
  return (
    <div className="bg-image" id="home">
      <div className="codeutsava__navbar-container">
        <NavbarTeam />
      </div>
      <div className="container mx-auto main-container">
        <div className="codeutsava__section3" id="events">
          <div className="codeutsava__section3-title">
            <img src={frank}></img>
            Games
          </div>
          <div className="codeutsava__section3-events-container">
              <GameCard />
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
  )
}

export default Merchandise