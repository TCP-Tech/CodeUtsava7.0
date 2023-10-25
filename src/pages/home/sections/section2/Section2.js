import React from "react";
import "./Section2.css";
import WordGlobe from "../../../../components/wordGlobe/WordGlobe";
import ghost from "../../../../assets/images/ghost.png";

const Section2 = () => {
  return (
    <div className="codeutsava__section2" id="aboutus">
      <div className="codeutsava__section2-body">
        <div className="codeutsava__section2-title">
          About Us
          <img src={ghost}></img>
        </div>
        <div className="codeutsava__section2-menu">
          <div className="codeutsava__section2-wordglobe">
            <WordGlobe />
          </div>
          <div className="codeutsava__section2-content">
            <span style={{ color: "var(--secondary-c)" }}>CodeUtsava</span>{" "}
            is an annual event organized by the Turing Club of
            Programmers. This event aims to bring like-minded coders from all
            over the nation together, and foster coding culture among the
            students of the institute through its diverse range of programs such
            as Workshops, Hackathon, Coding competitions, Gaming Battles, Mic
            Sessions and much more. <br/><br/>The most envisioned event of <span style={{ color: "var(--secondary-c)" }}>CodeUtsava</span>, is
            the Hackathon. The event consists of a 28-hour-long hackathon that
            witnesses various teams with participants from across the nation and
            all four years stirring for making the best applications with the
            most appealing innovations. This year, CodeUtsava also boasts a
            prize pool of 33 Lakhs, with 1.5-2 Lakh cash prizes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
