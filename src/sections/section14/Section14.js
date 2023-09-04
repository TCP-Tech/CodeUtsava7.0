import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./Section14.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Section14 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
        title: {
            text: "Year",
          },
      },
      yaxis: {
        title: {
          text: "No of Registrations",
        },
      },
      dataLabels: {
        // enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      colors: ["#eedb00"],
    },
    series: [
      {
        name: "sales",
        data: [30, 49, 60, 70, 91, 125],
      },
    ],
  });

  const optionsWithoutToolbar = {
    ...state.options,
    toolbar: {
      show: false,
    },
  };

  const [counterOn, setCounterOn] = useState(false);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section14"
      id="analytics"
    >
      <div className="codeutsava__section14-body">
        <div className="codeutsava__section14-title">Graph & Analytics</div>
        <div className="codeutsava__section14-menu1">
          <div className="codeutsava__section14-left">
            <Chart
              options={state.options}
              series={state.series}
              // width="400"
              type="bar"
            />
          </div>
          <div className="codeutsava__section14-right">
            <Chart
              options={optionsWithoutToolbar}
              series={state.series}
              // width="400"
              type="area"
            />
          </div>
        </div>
      <ScrollTrigger style={{width:"100%"}} onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        <div className="codeutsava__section14-menu2">
          <h1 className="codeutsava__section14-title">
            Last Year Paticipation
          </h1>
          <div>
            <div className="codeutsava__section14-format-card">
              <p className="codeutsava__section14-format-card-description">
              <span style={{ color: "#eedb00" }}>
                {counterOn && <CountUp start={500} end={1000} duration={1.5} delay={0}/>}
               +
                </span> TEAMS
              </p>
            </div>
            <div className="codeutsava__section14-format-card">
              <p className="codeutsava__section14-format-card-description">
              <span style={{ color: "#eedb00" }}>
              {counterOn && <CountUp start={50} end={100} duration={1.5} delay={0}/>}
               +
                </span> COLLEGES
              </p>
            </div>
            <div className="codeutsava__section14-format-card">
              <p className="codeutsava__section14-format-card-description">
              <span style={{ color: "#eedb00" }}>
              {counterOn && <CountUp start={1000} end={2000} duration={1.5} delay={0}/>}
               +
              </span> DEVELOPERS
              </p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
      </div>
     
    </motion.div>
  );
};

export default Section14;
