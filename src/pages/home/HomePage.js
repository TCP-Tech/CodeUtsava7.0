import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./HomePage.css";
import "../../App.css";
import InfiniteCarousel from "../../components/infiniteCarousel/InfiniteCarousel";
import IntroAudio from "../../components/introAudio/IntroAudio";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Section5 from "./sections/section5/Section5";
import Section6 from "./sections/section6/Section6";
import Section9 from "./sections/section9/Section9";
import Section8 from "./sections/section8/Section8";
import Section10 from "./sections/section10/Section10";
import Footer from "../../components/footer/Footer";
import Section15 from "./sections/section15/Section15";
import Section11 from "./sections/section11/Section11";
import Section12 from "./sections/section12/Section12";
import Section13 from "./sections/section13/Section13";
import Section14 from "./sections/section14/Section14";
import sponsers from "../../assets/data/sponsersData";
import Statistics from "../../components/statistics/Statistics";
import ScrollToTopnew from "../../components/scrollToTop/ScrollToTop";

const HomePage = () => {
  return (
    <div>
      <div className="codeutsava__navbar-container">
        <Navbar />
      </div>
      <div className="container mx-auto">
        <Section1 />
      </div>
      <Statistics />
      <div className="container mx-auto main-container">
        <Section2 />
        <Section14 />
        {/* <Section15 /> */}
        <Section3 />
        <Section4 />
        <Section5 />
        {/* <Section11 />
          <Section12 />
          <Section13 />
          <Section8 /> */}
        <Section6 />
        <Section9 />
        <Section10 />
      </div>
      <div className="intro_audio_new_design"><IntroAudio/></div>
      <ScrollToTopnew/>
      <div className="codeutsava__footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
