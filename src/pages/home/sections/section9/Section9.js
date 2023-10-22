import React from "react";
import Prizes from "../../../../assets/data/PrizesData";
import PrizeBox from "../../../../components/prizeBox/PrizeBox.js";
import ghost from '../../../../assets/images/ghost.png';
import "./Section9.css";

const Section9 = () => {
  return (
    <div
      className="codeutsava__section9" id="prizes"
    >
      <div className="codeutsava__section9-title">
        <div className="codeutsava__section9-title1">
          <img src={ghost} />Prizes</div>
        <div className="codeutsava__section9-title2">
          Win exciting prizes worth upto <b> &nbsp; 33 lakhs!</b>🏆
        </div>
      </div>
      <div className="codeutsava__section9-body">
        <div className="codeutsava__section9-description">
          {Prizes.map((info, index) => (
            <PrizeBox
              key={index}
              title={info.title}
              prizeInfo={info.prizeInfo}
              cashPrize={info.cashPrize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section9;
