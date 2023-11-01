import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import { getRemainingTimeUntilMsTimestamp } from "../../motionUtils";

import { baseUrl } from "../../constants";
import axios from "axios";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
};

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  const [st, setSt] = useState();
  const [et, setEt] = useState();
  const url = baseUrl + "getcounter/";
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(url);
      setState({
        data: data.data.data,
        loading: false,
      });
      console.log(state);
      if (data.data.data[0].flag) {
        handleClick();
      }
    };
    fetchData();
  }, [state]);

  // const fetchD = async () => {
  //   const data = await axios.get(url);
  //   setState({
  //     data: data.data.data,
  //     loading: false,
  //   });
  //   console.log(data.data.data.flag);
  // }

  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = baseUrl + "setcounter/";
    const st = new Date().getTime();
    const et = st + 100800000;
    setSt(st);
    setEt(et);
    const data = {
      flag: true,
      startTime: st,
      endTime: et,
    };
    setState({ data: data, loading: false });

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    var delayInMilliseconds = 2000; //1 second

    console.log(state.data.data);

    setTimeout(function () {
      handleClick();
      //your code to be executed after 1 second
    }, delayInMilliseconds);
    // countdownTimestampMs = state.data.data.endTime-state.data.data.startTime;
    //your code to be executed after 1 second

    console.log(response);
  };

  console.log(state);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  const handleClick = () => {
    console.log(state.data[0].endTime);
    console.log(state.data[0].startTime);
    const countdownTimestampMs = state.data[0].endTime;
    updateRemainingTime(countdownTimestampMs);
    console.log(countdownTimestampMs);
    console.log(remainingTime);
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  };

  console.log(remainingTime);
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
      {!state.flag && (
        <button
          onClick={(e) => handleSubmit(e)}
          className="codeutsava__start-countdown"
        >
          Begin!
        </button>
      )}
    </div>
  );
};

export default CountdownTimer;
