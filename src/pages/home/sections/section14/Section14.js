import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./Section14.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import pumpkin from "../../../../assets/images/pumpkin.png";
import cauldron from "../../../../assets/images/cauldron.png";

const Section14 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      dataLabels: {
        // enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      colors: ["var(--secondary-c)"],
    },
    series: [
      {
        name: "Total Number of Teams",
        data: [120, 200, 260, 450, 570, 640, 800],
      },
      {
        name: "Total Participations",
        data: [500, 800, 1000, 1600, 1800, 2400, 3200],
      },
    ],
  });

  const getFontSize = () => {
    const fontSize = window.innerWidth <= 767 ? "8px" : "14px";
    return fontSize;
  };

  const getChartHeight = () => {
    const smallScreenHeight = 300;
    const largeScreenHeight = 400;
  
    if (window.innerWidth <= 450) {
      return smallScreenHeight;
    } else {
      return largeScreenHeight;
    }
  };

  const optionsWithoutToolbar = {
    ...state.options,
    toolbar: {
      show: false,
    },
    dataLabels: {
      style: {
        fontSize: getFontSize(),
      },
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
        <div className="codeutsava__section14-title">
          Graph & Analytics
          <img src={pumpkin}></img>
        </div>
        <div className="codeutsava__section14-menu1">
          <div className="codeutsava__section14-left">
            <Chart
              options={{
                ...optionsWithoutToolbar,
                xaxis: {
                  ...optionsWithoutToolbar.xaxis,
                  categories: ["2016", "2018", "2019", "2020", "2022", "2022-23", "2023-24"],
                  title: {
                    text: "Year",
                  },
                },
                yaxis: {
                  ...optionsWithoutToolbar.yaxis,
                  title: {
                    text: "Total Number of Teams",
                  },
                },
              }}
              series={state.series.slice(0, 1)}
              type="area"
              height={getChartHeight()}
            />
          </div>
          <div className="codeutsava__section14-right">
            <Chart
              options={{
                ...optionsWithoutToolbar,
                xaxis: {
                  ...optionsWithoutToolbar.xaxis,
                  categories: ["2016", "2018", "2019", "2020", "2022", "2022-23", "2023-24"],
                  title: {
                    text: "Year",
                  },
                },
                yaxis: {
                  ...optionsWithoutToolbar.yaxis,
                  title: {
                    text: "Total Participations",
                  },
                },
              }}
              series={state.series.slice(1)}
              type="bar"
              height={getChartHeight()}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section14;
