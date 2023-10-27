import React from "react";
import { useState, useEffect } from "react";
import "./Section8.css";
import problems from "../../../../assets/data/problemsData.js";
import ProblemStatements from "../../../../assets/images/Problem_Statements.pdf";
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

        Problem Statements</div>
        <div className="codeutsava__section6-content" style={{marginBottom:'4rem'}}>
          Check Out This Year Problem Statements. <a download="Problem_Statements" href={ProblemStatements}>
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
                impact={problem.impact}
                background={problem.background}
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
