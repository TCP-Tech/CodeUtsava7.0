import React, { Component } from "react";
import "./Error404.css";
import "../../App.css";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img404 from "../../assets/images/404.gif";

const Error404 = () => {
  return (
    <>
      <div className="codeutsava__navbar-container">
        <NavbarTeam />
      </div>
      <div className="container mx-auto codeutsava__error-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: false }}
          className="codeutsava__team-options"
        >
          <div className="codeutsava__team-options-body">
            <div className="codeutsava__team-options-header-container">
              <div className="codeutsava__team-options-main-title">
                Whoops! 404 page not found.
              </div>
            </div>
            <img src={img404}></img>
            <div className="codeutsava__team-options-header-container">
              <div className="codeutsava__team-options-main-title">
                Looks like this page went on vacation.
              </div>
            </div>
            <div className="codeutsava__team-options-content-container">
              <Link
                className="codeutsava__team-options-button"
                to="/"
                state={{ year: 2023 }}
              >
                Back To Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="codeutsava__footer-container" style={{ marginTop: 0 }}>
        <Footer />
      </div>
    </>
  );
};

export default Error404;
