import React from "react";
import { useState, useEffect } from "react";

import "./Section11.css";

import shortlistedTeams from "../../../../assets/data/shortlistedTeamsData";
import shortlistedTeamsOI from "../../../../assets/data/shortlistedTeamsDataOI";
import ShortlistedTeamCard from "../../../../components/shortlistedTeamCard/ShortlistedTeamCard";

const Section11 = () => {
  const useFade = (initial) => {
    const [show, setShow] = useState(initial);
    const [isVisible, setVisible] = useState(show);
    useEffect(() => {
      if (show) setVisible(true);
    }, [show]);
    const onAnimationEnd = () => {
      if (!show) setVisible(false);
    };

    const style = {
      animation: `${
        show ? "fadeIn 1.5s ease-in-out" : "fadeOut 0.5s ease-in-out"
      }`,
    };
    const fadeProps = {
      style,
      onAnimationEnd,
    };
    return [isVisible, setShow, fadeProps];
  };
  const [isVisible, setVisible, fadeProps] = useFade(false);

  return (
    <div className="codeutsava__section11" id="problems">
      <div className="codeutsava__section11-body">
        <div className="codeutsava__section11-title">Teams Shortlisted</div>
        <div className="codeutsava__section11-problems">
          <div className="codeutsava__section11-problems-container1">
            {shortlistedTeams.map((shortlistedTeam, index) => (
              <ShortlistedTeamCard
                key={index}
                name={shortlistedTeam.name}
                leader={shortlistedTeam.leader}
                college={shortlistedTeam.college}
                member1={shortlistedTeam.member1}
                member2={shortlistedTeam.member2}
                member3={shortlistedTeam.member3}
                member4={shortlistedTeam.member4}
                member5={shortlistedTeam.member5}
                member6={shortlistedTeam.member6}
              />
            ))}
          </div>
        </div>
        <div
          className="codeutsava__section11-title"
          style={{ marginTop: "8rem" }}
        >
          Teams Shortlisted (Open Innovation)
        </div>
        <div className="codeutsava__section11-problems">
          <div className="codeutsava__section11-problems-container1">
            {shortlistedTeamsOI.map((shortlistedTeam, index) => (
              <ShortlistedTeamCard
                key={index}
                name={shortlistedTeam.name}
                leader={shortlistedTeam.leader}
                college={shortlistedTeam.college}
                member1={shortlistedTeam.member1}
                member2={shortlistedTeam.member2}
                member3={shortlistedTeam.member3}
                member4={shortlistedTeam.member4}
                member5={shortlistedTeam.member5}
                member6={shortlistedTeam.member6}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section11;
