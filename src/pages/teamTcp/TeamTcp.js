import React, { Component } from "react";
import "./TeamTcp.css";
import "../../App.css";
import Team from "../../sections/team/Team";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
export default class TeamTcp extends Component {
  render() {
    return (
      <>
        <div className="codeutsava__navbarTeam-container">
          <NavbarTeam />
        </div>
        <div className="container mx-auto">
          <Team />
        </div>
      </>
    );
  }
}
