import React from "react";
import { useRef, useState } from "react";
import "./NavbarTeam.css";
import codeutsava from "../../assets/images/codeutsava.png";
import tcp from "../../assets/images/tcp.png";
import downArrow from "../../assets/images/downArrow.svg";
import brochure from "../../assets/images/Codeutsava_Brochure_6.0.pdf";
import { motion } from "framer-motion";
import { headerVariants } from "../../motionUtils";
import { Link } from 'react-router-dom'

const NavbarTeam = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburger = useRef(null);
  function toggleMenu() {
    setIsOpen(!isOpen);
    hamburger.current.classList.toggle("active");
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className="codeutsava__navbarTeam-container"
    >
      <header className="codeutsava__navbarTeam">
        <div className="codeutsava__navbarTeam-body">
          <div className="codeutsava__navbarTeam-logo">
            <img src={codeutsava} />
          </div>
          <nav className="codeutsava__navbarTeam-menu">
            <ul className="codeutsava__navbarTeam-navlist">
              <li className="codeutsava__navbarTeam-navitem">
                <Link to="/">
                  <h3 className="codeutsava__navbarTeam-menu-heading">Back To Main Page</h3>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="codeutsava__navbarTeam-logo codeutsava__navbarTeam-brochure">
            <img src={tcp} />
            <button className="codeutsava__navbarTeam-brochure-button">
              <img src={downArrow} />
              <a href={brochure} download="Brochure">
                BROCHURE
              </a>
            </button>
          </div>
        </div>
      </header>
      <header
        className={`codeutsava__navbarTeam-hamburger ${
          isOpen ? `hamburger-open` : ``
        }`}
      >
        <div className="codeutsava__navbarTeam-hamburger-body">
          <nav className="codeutsava__navbarTeam-hamburger-nav">
            <div className="hamburger">
              <svg
                className="ham hamRotate ham8"
                viewBox="0 0 100 100"
                width="80"
                ref={hamburger}
                onClick={toggleMenu}
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                />
              </svg>
            </div>
            <div className="codeutsava__navbarTeam-hamburger-logo">
              <img src={codeutsava} />
            </div>
            <div className="codeutsava__navbarTeam-hamburger-logo">
              <img src={tcp} />
            </div>
          </nav>
        </div>
        <ul
          className={`codeutsava__navbarTeam-hamburger-navlist ${
            isOpen ? `activeMenu slide-bottom` : ``
          }`}
        >
          <li className="codeutsava__navbarTeam-hamburger-navitem">
            <Link to="/" onClick={toggleMenu}>
              <h3 className="codeutsava__navbarTeam-hamburger-menu-heading">
                Back To Home Page
              </h3>
            </Link>
          </li>
          <button className="codeutsava__navbarTeam-hamburger-brochure-button codeutsava__navbarTeam-brochure-button">
            <img src={downArrow} />
            <a href={brochure} download="Brochure">
              Download Brochure
            </a>
          </button>
        </ul>
      </header>
    </motion.div>
  );
};

export default NavbarTeam;
