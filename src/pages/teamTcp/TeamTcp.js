import React, { Component } from "react";
import "./TeamTcp.css";
import "../../App.css";
import TeamOptions from "../../components/teamOptions/TeamOptions";
import NavbarTeam from "../../components/navbarTeam/NavbarTeam";
import Footer from "../../components/footer/Footer";

export default class TeamTcp extends Component {
  render() {
    return (
      <>
        <div className="codeutsava__navbar-container">
          <NavbarTeam />
        </div>
        <div className="container mx-auto codeutsava__team-options-container">
          <TeamOptions />
        </div>
        <div className="codeutsava__footer-container" style={{marginTop: 0}}>
          <Footer />
        </div>
      </>
    );
  }
}
