import React from 'react'
import './TeamCard3_2023.css'
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import spider from "../../assets/images/spider.svg";
import horrorpumpkin from "../../assets/images/horrorpumpkin.svg";


const TeamCard3_2023 = ({ img,
  name,
  position,
  linkedin,
  domain,}) => {
  return (
    <div className="TeamCard3_2023">
    <div className="ds-top"></div>
    <div className="spider1"><img src={spider} /></div>
    <div className="avatar-holder">
        <img src={img}  className="image"/>
    </div>
    <div className="content">
        <h2>{name}</h2>
        <h2>{position}</h2>
        <h3>{domain}</h3>
    </div>
    <div className="pumpkin2"><img src={horrorpumpkin}className="pumpkinimg" /></div>
    <div className="social">
        <a href={linkedin} target="_blank" className="fa fa-linkedin" aria-hidden="true" ></a>
    </div>

</div>
  )
}

export default TeamCard3_2023