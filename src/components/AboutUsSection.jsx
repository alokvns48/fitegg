import AboutUs from "./AboutUs";
import HealthBenifits from "./HealthBenifits";
import WhatItProviders from "./WhatItProviders";

function AboutUsSection() {
  return (
    <div className="w-full bg-[#FF73B5]">
      <AboutUs />
      <WhatItProviders />
      <HealthBenifits />
    </div>
  );
}

export default AboutUsSection;
