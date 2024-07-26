import AboutUs from "./AboutUs";
import HealthBenifits from "./HealthBenifits";
import WhatItProviders from "./WhatItProviders";

function AboutUsSection() {
  return (
    <div className="w-full">
      <div className="min-h-screen bg-[#FF73B5] sticky top-0">
        <AboutUs />
      </div>
      <div className="min-h-screen flex flex-col justify-center bg-red-400 sticky top-0">
        <WhatItProviders />
        <HealthBenifits />
      </div>
    </div>
  );
}

export default AboutUsSection;
