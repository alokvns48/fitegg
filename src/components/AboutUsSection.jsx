import AboutUs from "./AboutUs";
import HealthBenifits from "./HealthBenifits";
import WhatItProviders from "./WhatItProviders";

function AboutUsSection() {
  return (
    <div className="w-full bg-[#FF73B5]">
      <div className="min-h-screen">
        <AboutUs />
      </div>
      <div className="min-h-screen flex flex-col justify-center">
        <WhatItProviders />
        <HealthBenifits />
      </div>
    </div>
  );
}

export default AboutUsSection;
