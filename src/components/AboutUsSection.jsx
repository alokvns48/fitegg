import AboutUs from "./AboutUs";
import HealthBenifits from "./HealthBenifits";
import WhatItProviders from "./WhatItProviders";

function AboutUsSection() {
  return (
    <div className="w-full">
      <div id="about" className=" bg-[#FF73B5] sticky top-0">
        <AboutUs />
      </div>
      <div id="benefit1" className="min-h-screen flex flex-col justify-center bg-red-400 sticky top-0">
        <WhatItProviders />
        <HealthBenifits />
      </div>
    </div>
  );
}

export default AboutUsSection;
