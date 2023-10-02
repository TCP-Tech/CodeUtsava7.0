import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TeamTCP from "./pages/teamTcp/TeamTcp";
import ScrollToTop from "./ScrollToTop";
import Error404 from "./pages/Error404/Error404";
import ContactUs from "./pages/contactUs/ContactUs";
import FAQs from "./pages/faqs/FAQs";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamTCP />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
