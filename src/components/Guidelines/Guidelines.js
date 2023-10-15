import React from "react";
import pumpkin from "../../assets/images/pumpkin.png";
import web from "../../assets/images/spider-web.svg";
import "./Guidelines.css";
import judgement from "../../assets/images/CodeUtsava_Judgement_7.0.pdf"
const Guidelines = () => {
  return (
    <div className="container mx-auto main-container">
      <div className="codeutsava__guidelines" id="events">
        <div className="codeutsava__guidelines-title">Guidelines
        <img src={pumpkin}></img>
        </div>
        <div className="codeutsava__guidelines-events-container">
          <img src={web} alt="" />
          <div className="codeutsava__guidelines-card">
            <div className="codeutsava__guidelines-content">
              <div className="codeutsava__guidelines-cardTitle">
                TEAM &nbsp; FORMATION
              </div>
              <div className="codeutsava__guidelines-detail">
                <p>
                  <span>1.</span> &nbsp; All team members should be from the same college; no
                  inter-college teams are allowed. However, members from
                  different branches of the same college/ institute are
                  encouraged to form a team.
                </p>
                <p>
                <span>2.</span> &nbsp; Each team would comprise 2–4 members, including the team
                  leader.
                </p>
                <p>
                <span>3.</span> &nbsp; As the software edition of the hackathon is a digital
                  product development competition, the majority of the team
                  members must be well versed with programming skills. For the
                  hardware edition, we encourage multidisciplinary teams – which
                  means your team should have a good mix of Mechanical
                  Engineers, Electronic Engineers, Product Designers and
                  Programmers, etc.
                </p>
              </div>
              <div className="codeutsava__guidelines-detail2">
                Please note that <b>NIT Raipur will be providing meals, travel and
                accommodation free of cost</b>. Travel charges up to <b>Rs. 1500 per
                person to and fro will be reimbursed</b> when presented with a valid
                ticket/booking receipt.
              </div>
              <a
                className="codeutsava__guidelines-link"
                href={judgement}
                download="Judgement Criteria"
              >
                Judgement Criteria
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
