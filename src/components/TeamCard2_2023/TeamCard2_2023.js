import React from "react";
import "./TeamCard2_2023.css";
import photo from './TeamCard2/pic3.jpg';
import linkedin from './TeamCard2/linkedin.svg';
import spider_web from './TeamCard2/spider_web.webp';
import spider from './TeamCard2/spider.svg';
import pumpkin from './TeamCard2/pumpkin.webp'

const TeamCard2_2023 = (props) => {
    return (
        <div className="HC_card">
                <div className="anim_bg1"></div>
                
                <div className="Name" >
                    <h4><b>John Doe</b></h4>
                </div>
                
                <div className="bg_img" >
                    <img className="profile_img" src={photo} alt="Profile_photo" />
                </div>
                <img src={pumpkin} className="pumpkin" alt="pumpkin"/>
                <img src={pumpkin} className="pumpkin2" alt="pumpkin"/>
                <div className="domain_info">
                    <p className="domain">Technical</p>
                    <p><b>Head Coordinator</b></p>
                </div>
                <div className="media_links" >
                    <a href = "#" ><img src={linkedin} alt="linkedin" /></a>
                </div>

                <img src={spider_web} className="spider_web" alt="spiderweb"/>
                <img src={spider} className="spider" alt="spider"/>
                
                
            </div>

    )
}




export default TeamCard2_2023;
