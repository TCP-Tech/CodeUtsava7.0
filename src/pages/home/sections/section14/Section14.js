import React, { useState, useEffect } from "react";
import "./Section14.css";
import pumpkin from "../../../../assets/images/pumpkin.png";
import graph1 from "../../../../assets/images/graph1.webp";
import graph2 from "../../../../assets/images/graph2.webp";

const Section14 = () => {

  return (
    <div
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
            <img src={graph2} alt="graph1" width="100%" />
          </div>
          <div className="codeutsava__section14-right">
          <img src={graph1} alt="graph1" width="100%"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section14;
