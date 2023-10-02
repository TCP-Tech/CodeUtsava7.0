import React, { Component } from "react";
import "./ContactUs.css";
import cauldron from "../../assets/images/cauldron.png";
import { motion } from "framer-motion";
import ContactForm from "../../components/contactForm/ContactForm";
import Footer from "../../components/footer/Footer";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import IntroAudio from "../../components/introAudio/IntroAudio";

const ContactUs = () => {
  return (
    <div>
      <div className="codeutsava__navbar-container">
        <NavbarTeam />
      </div>
      <div className="container mx-auto main-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: false }}
          className="codeutsava__contact-container"
        >
          <div className="codeutsava__contact-title">
            Have Some Questions?
            <img src={cauldron} />
          </div>
          <ContactForm />
        </motion.div>
      </div>
      <div className="intro_audio_new_design"><IntroAudio/></div>
      <div className="codeutsava__footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
