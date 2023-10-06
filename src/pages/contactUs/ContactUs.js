import React, { Component } from "react";
import "./ContactUs.css";
import cauldron from "../../assets/images/cauldron.png";
import ContactForm from "../../components/contactForm/ContactForm";
import Footer from "../../components/footer/Footer";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import IntroAudio from "../../components/introAudio/IntroAudio";

const ContactUs = () => {
  return (
    <div className="bg-image"  id="home">
      <div className="codeutsava__navbar-container">
        <NavbarTeam />
      </div>
      <div className="container mx-auto main-container">
        <div
          className="codeutsava__contact-container"
        >
          <div className="codeutsava__contact-title">
            Have Some Questions?
            <img src={cauldron} />
          </div>
          <ContactForm />
        </div>
      </div>
      <div className="intro_audio_new_design"><IntroAudio/></div>
      <div className="codeutsava__footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
