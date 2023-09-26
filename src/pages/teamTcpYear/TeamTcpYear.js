import React, { Component } from "react";
import "./TeamTcpYear.css";
import "../../App.css";
import Team from "../../components/team/Team";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import { useLocation } from "react-router-dom";

const TeamTcpYear = () => {
  let location = useLocation();
  console.log(location.state);
  return (
    <>
      <div className="codeutsava__navbar-container">
        <NavbarTeam />
      </div>
      <div>
        <Team year={location.state.year}/>
      </div>
    </>
  );
};

export default TeamTcpYear;
