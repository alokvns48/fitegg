import AboutUs from "./AboutUs";
import HealthBenifits from "./HealthBenifits";
import WhatItProviders from "./WhatItProviders";

function AboutUsSection() {
  return (
    <div className="w-full">
      <div id="about" className=" bg-[#e5e3d3] sticky top-0">
        <AboutUs />
      </div>
      <div id="benefit1" className="min-h-screen flex flex-col justify-center bg-[#FFF6F6] sticky top-0 gap-2 sm:gap-0">
        <WhatItProviders />
        <HealthBenifits />
      </div>
    </div>
  );
}

export default AboutUsSection;
