import React from "react";
import bg_orange from "../assets/bg_orange.gif";
import AboutUs from "./AboutUs";

function AboutUsSection() {
  return (
    <div
      className="w-full min-h-screen bg-repeat"
      style={{ backgroundImage: `url(${bg_orange})` }}
    >
      <div className="relative z-20 flex flex-col h-full w-full px-24 pt-28">
        <AboutUs />
      </div>
    </div>
  );
}

export default AboutUsSection;
