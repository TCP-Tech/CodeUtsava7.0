import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import { getRemainingTimeUntilMsTimestamp } from "../../motionUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  console.log(remainingTime);

  useEffect(() => {}, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  console.log(remainingTime.seconds);

  const handleClick = () => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  };

  return (
    <div className="codeutsava__countdown-timer">
      <div>
        {remainingTime.seconds !== "00" ? (
          <>
            <span className="codeutsava__two-numbers">
              {remainingTime.hours}
            </span>
            <span>H :</span>
            <span className="codeutsava__two-numbers">
              {remainingTime.minutes}
            </span>
            <span>M :</span>
            <span className="codeutsava__two-numbers">
              {remainingTime.seconds}
            </span>
            <span>S</span>
          </>
        ) : (
          <>
            <span>Begin!</span>{" "}
          </>
        )}
      </div>
      <button onClick={(e) => handleClick(e)} className="codeutsava__start-countdown">Begin!</button>
    </div>
  );
};

export default CountdownTimer;
