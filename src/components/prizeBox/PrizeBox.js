import React from "react";

import "../../pages/home/sections/section9/Section9.css";

const PrizeBox = ({ title, cashPrize, prizeInfo, key}) => {
  return (
    <div className={`codeutsava__section9-box grave`}>
      <div className="codeutsava__section9-boxtitle">{title}</div>
      <div className="codeutsava__section9-boxInfo">
        <ul>
          {cashPrize.map((listElement, index) => (
            <li key={index}>
              <b>{listElement}</b>
            </li>
          ))}
          {prizeInfo.map((listElement, index) => (
            <li key={index}>{listElement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrizeBox;
