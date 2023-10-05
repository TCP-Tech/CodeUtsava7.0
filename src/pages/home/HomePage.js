import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Suspense, lazy } from "react";
import "./HomePage.css";
import "../../App.css";
import IntroAudio from "../../components/introAudio/IntroAudio";
import Section1 from "./sections/section1/Section1";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Section5 from "./sections/section5/Section5";
import Section6 from "./sections/section6/Section6";
import Section10 from "./sections/section10/Section10";
import Section14 from "./sections/section14/Section14";
import Statistics from "../../components/statisticalData/Statistics";
import Footer from "../../components/footer/Footer";
// import ScrollToTopnew from "../../components/scrollToTop/ScrollToTop";

// const Section2 = lazy(() => import("./sections/section2/Section2"));
// const Section14 = lazy(() => import("./sections/section14/Section14"));
// const Section5 = lazy(() => import("./sections/section5/Section5"));
// const Section3 = lazy(() => import("./sections/section3/Section3"));
// const Section4 = lazy(() => import("./sections/section4/Section4"));
// const Section6 = lazy(() => import("./sections/section6/Section6"));
// const Section10 = lazy(() => import("./sections/section10/Section10"));

const HomePage = () => {
  return (
    <div className="bg-image">
      <Navbar />
      <div className="container mx-auto">
        <Section1 />
      </div>
      <Statistics />
      <div className="container mx-auto main-container">
        
          <Section2 />
        
        
          <Section14 />
        
        
          <Section5 />
        
        
          <Section3 />
        
        
          <Section4 />
        
        
          <Section6 />
        
        
          <Section10 />
        
        {/* <Section15 /> */}
        {/* <Section11 />
          <Section12 />
          <Section13 />
          <Section8 /> */}
        {/* <Section9 /> */}
      </div>
      <div className="intro_audio_new_design">
        <IntroAudio />
      </div>
      {/* <ScrollToTopnew /> */}
      <div className="codeutsava__footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
