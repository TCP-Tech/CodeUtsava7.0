import React from "react";

import '../../sections/section9/Section9.css';

const PrizeBox = ({title , cashPrize , prizeInfo }) =>{
    return (
        <div className="codeutsava__section9-box">
            <div className="codeutsava__section9-boxtitle">{title}</div>
            <div className="codeutsava__section9-boxInfo">
                <ul>
                    {cashPrize.map((listElement , index ) => (
                        <li><b>{listElement}</b></li>
                    ))}
                    {prizeInfo.map((listElement , index) => (
                        <li>{listElement}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default PrizeBox;