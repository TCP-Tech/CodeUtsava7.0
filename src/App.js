import React, { Component } from "react";
import { Suspense, lazy } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

const HomePage = lazy(() => import("./pages/home/HomePage"))
const TeamTCP = lazy(() => import("./pages/teamTcp/TeamTcp"))
const Error404 = lazy(() => import("./pages/Error404/Error404"))
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"))
const FAQs = lazy(() => import("./pages/faqs/FAQs"))
const Events = lazy(() => import("./pages/events/Events"))
const Speakers = lazy(() => import("./pages/speakers/Speakers"))

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamTCP />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/speakers" element={<Speakers />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}
