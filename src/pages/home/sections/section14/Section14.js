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
      colors: ["var(--secondary-c)"],
    },
    series: [
      {
        name: "Total Number of Teams",
        data: [100, 500, 700, 1000, 1000, 1100],
      },
    ],
    series: [
      {
        name: "Total Participations",
        data: [500, 1000, 1000, 2500, 3000, 5000],
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
                  categories: ["2016", "2018", "2019", "2020", "2022", "2023"],
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
              series={state.series}
              type="area"
            />
          </div>
          <div className="codeutsava__section14-right">
            <Chart
              options={{
                ...state.options,
                xaxis: {
                  ...state.options.xaxis,
                  categories: ["2016", "2018", "2019", "2020", "2022", "2023"],
                  title: {
                    text: "Year",
                  },
                },
                yaxis: {
                  ...state.options.yaxis,
                  title: {
                    text: "Total Participations",
                  },
                },
              }}
              series={state.series}
              type="bar"
            />
          </div>
        </div>
        <ScrollTrigger
          style={{ width: "100%" }}
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="codeutsava__section14-menu2">
            <h1 className="codeutsava__section14-title">
              <img src={cauldron}></img>Last Year Participation
            </h1>
            <div>
              <div className="codeutsava__section14-format-card">
                <p className="codeutsava__section14-format-card-description">
                  <span style={{ color: "var(--secondary-c)" }}>
                    {counterOn && (
                      <CountUp
                        start={500}
                        end={1000}
                        duration={1.5}
                        delay={0}
                      />
                    )}
                    +
                  </span>{" "}
                  TEAMS
                </p>
              </div>
              <div className="codeutsava__section14-format-card">
                <p className="codeutsava__section14-format-card-description">
                  <span style={{ color: "var(--secondary-c)" }}>
                    {counterOn && (
                      <CountUp start={50} end={100} duration={1.5} delay={0} />
                    )}
                    +
                  </span>{" "}
                  COLLEGES
                </p>
              </div>
              <div className="codeutsava__section14-format-card">
                <p className="codeutsava__section14-format-card-description">
                  <span style={{ color: "var(--secondary-c)" }}>
                    {counterOn && (
                      <CountUp
                        start={1000}
                        end={2000}
                        duration={1.5}
                        delay={0}
                      />
                    )}
                    +
                  </span>{" "}
                  DEVELOPERS
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
