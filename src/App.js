import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TeamTCP from "./pages/teamTcp/TeamTcp";
import "./App.css";
import ScrollToTop from './ScrollToTop';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamTCP />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
