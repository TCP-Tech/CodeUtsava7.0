import React from "react";
import CountdownTimer from "../../components/countdownTimer/CountdownTimer";
import frank from "../../assets/images/frakenstein.png";
import './CountDown.css'

const CountDown = () => {
  return (
    <div className="bg-image" id="home">
      <div className="container mx-auto main-container">
        <div className="codeutsava__countdown-section">
          <div className="codeutsava__section3-title" style={{fontSize: '4rem'}}>
            <img src={frank}></img>
            Hackathon CountDown
          </div>
            <CountdownTimer
              countdownTimestampMs={new Date().getTime() + 100800000}
            />
        </div>
      </div>
    </div>
  );
};

export default CountDown;
