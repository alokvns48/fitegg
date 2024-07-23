
import bg_orange from "../assets/bg_orange.gif";
import AboutUs from "./AboutUs";
import HealthBenifits from "./HealthBenifits";
import WhatItProviders from "./WhatItProviders";

function AboutUsSection() {
  return (
    <div
      className="w-full min-h-screen bg-repeat "
      style={{ backgroundImage: `url(${bg_orange})` }}
    >
      <div className="flex flex-col justify-center items-center h-full w-full px-[6vw] pt-28 bg-gradient-to-b from-[#fff8e3]">
        <AboutUs />
      </div>
      <WhatItProviders/>
      <HealthBenifits/>
    </div>
  );
}

export default AboutUsSection;
