import React from "react";
import Navibar from "../components/Navibar";
import Hero from "../components/Hero";
import ThingsYouNeed from "../components/ThingsYouNeed";
import Destination from "../components/Destination";
import AboutUs from "../components/AboutUs";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import "../App.css";

export default function WelcomePage() {
  return (
    <div>
      <Navibar />
      <Hero />
      <ThingsYouNeed />
      <Destination />
      <AboutUs />
      <Subscribe />
      <Footer />
    </div>
  );
}
