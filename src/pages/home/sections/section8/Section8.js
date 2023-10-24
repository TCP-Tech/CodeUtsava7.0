import React from "react";
import { useState, useEffect } from "react";
import "./Section8.css";
import problems from "../../../../assets/data/problemsData.js";
import ProblemCard from "../../../../components/problemCard/ProblemCard";
import { previousYear, baseUrl } from "../../../../constants";
import axios from "axios";
import cauldron from "../../../../assets/images/cauldron.png";

const Section8 = () => {
  return (
    <div className="codeutsava__section8" id="problems">
      <div className="codeutsava__section8-body">
        <div className="codeutsava__section8-title">
        <img src={cauldron}></img>

        Previous Problem Statements</div>
        <div className="codeutsava__section6-content" style={{marginBottom:'4rem'}}>
          Check Out Previous Year Problem Statements, Winners and Projects <a target="__blank" href="https://codeutsava-3.devfolio.co/">
                      <span className="codeutsava__section7-left-bottom-content-contact-us-route">
                        {" "}
                        Here.{" "}
                      </span>
                    </a>
        </div>
        <div className="codeutsava__section8-problems">
          <div className="codeutsava__section8-problems-container">
            {problems.map((problem, index) => (
              <ProblemCard
                key={index}
                img={problem.img}
                title={problem.title}
                domain={problem.domain}
                statement={problem.statement}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
