import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Suspense, lazy } from "react";
import "./HomePage.css";
import "../../App.css";
import IntroAudio from "../../components/introAudio/IntroAudio";
import Section1 from "./sections/section1/Section1";
// import Section3 from "./sections/section3/Section3";
// import Section4 from "./sections/section4/Section4";
// import Section5 from "./sections/section5/Section5";
// import Section6 from "./sections/section6/Section6";
// import Section10 from "./sections/section10/Section10";
import Footer from "../../components/footer/Footer";
// import Section14 from "./sections/section14/Section14";
import Statistics from "../../components/statisticalData/Statistics";
// import ScrollToTopnew from "../../components/scrollToTop/ScrollToTop";

const Section2 = lazy(() => import("./sections/section2/Section2"));
const Section14 = lazy(() => import("./sections/section14/Section14"));
const Section5 = lazy(() => import("./sections/section5/Section5"));
const Section3 = lazy(() => import("./sections/section3/Section3"));
const Section4 = lazy(() => import("./sections/section4/Section4"));
const Section6 = lazy(() => import("./sections/section6/Section6"));
const Section10 = lazy(() => import("./sections/section10/Section10"));

const HomePage = () => {
  return (
    <div className="bg-image">
      <Navbar />
      <div className="container mx-auto">
        <Section1 />
      </div>
      <Statistics />
      <div className="container mx-auto main-container">
        <Suspense fallback={<div style={{color: 'white', fontSize: '32px'}}>Loading...</div>}>
          <Section2 />
        </Suspense>
        <Suspense fallback={<div style={{color: 'white', fontSize: '32px'}}>Loading...</div>}>
          <Section14 />
        </Suspense>
        <Suspense fallback={<div style={{color: 'white', fontSize: '32px'}}>Loading...</div>}>
          <Section5 />
        </Suspense>
        <Suspense fallback={<div style={{color: 'white', fontSize: '32px'}}>Loading...</div>}>
          <Section3 />
        </Suspense>
        <Suspense fallback={<div style={{color: 'white', fontSize: '32px'}}>Loading...</div>}>
          <Section4 />
        </Suspense>
        <Suspense fallback={<div style={{color: 'white', fontSize: '32px'}}>Loading...</div>}>
          <Section6 />
        </Suspense>
        <Suspense fallback={<div style={{color: 'white', fontSize: '32px'}}>Loading...</div>}>
          <Section10 />
        </Suspense>
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
