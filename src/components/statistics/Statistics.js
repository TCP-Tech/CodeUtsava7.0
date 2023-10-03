import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import React from "react";
import { useState } from "react";
import "./Statistics.css";
import cauldron from '../../assets/images/cauldron.png'

const Statistics = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div
      className="codeutsava__section-statistics"
    >
      <div className="codeutsava__section-statistics-body">
        <ScrollTrigger
          style={{ width: "100%" }}
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="codeutsava__section-statistics-menu2">
            <h1 className="codeutsava__section-statistics-title">
              <img src={cauldron}></img>Last Year Participation
            </h1>
            <div>
              <div className="codeutsava__section-statistics-format-card">
                <p className="codeutsava__section-statistics-format-card-description">
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
              <div className="codeutsava__section-statistics-format-card">
                <p className="codeutsava__section-statistics-format-card-description">
                  <span style={{ color: "var(--secondary-c)" }}>
                    {counterOn && (
                      <CountUp start={50} end={100} duration={1.5} delay={0} />
                    )}
                    +
                  </span>{" "}
                  COLLEGES
                </p>
              </div>
              <div className="codeutsava__section-statistics-format-card">
                <p className="codeutsava__section-statistics-format-card-description">
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
              <div className="codeutsava__section-statistics-format-card">
                <p className="codeutsava__section-statistics-format-card-description">
                  <span style={{ color: "var(--secondary-c)" }}>
                    {counterOn && (
                      <CountUp
                        start={100}
                        end={1000}
                        duration={1.5}
                        delay={0}
                      />
                    )}
                    +
                  </span>{" "}
                  VISITORS
                </p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Statistics;
