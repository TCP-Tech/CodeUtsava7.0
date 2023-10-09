import React, { Component } from "react";
import "./TeamTcp.css";
import "../../App.css";
import Team from "../../components/team/Team";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import { currentYear } from "../../constants";

const TeamTcp = () => {
  return (
    <div className="bg-image" id="home">
      <div className="codeutsava__navbar-container">
        <NavbarTeam />
      </div>
      <div>
        <Team year={currentYear}/>
      </div>
    </div>
  );
};

export default TeamTcp;
