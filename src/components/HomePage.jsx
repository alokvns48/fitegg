import Navbar from "./Navbar";
import HealthyEating from "./HealthyEating";
import Nutrients from "./Nutrients";
import EggWithHeading from "./EggWithHeading";
import LearnMore from "./LearnMore";

function HomePage() {
  return (
    <section className="w-full bg-[#fff8e3] px-24 HomePageSection">
      <Navbar />
      <div className="HomePageContainerDiv flex justify-center xl:gap-[80px]">
        {/* left section */}
        <EggWithHeading />
        <div className="homePageRightSectionContainer">
          {/* Right section */}
          <HealthyEating />
          <div className="flex justify-between 2xl:justify-normal learnMoreandNutrientsContainer">
            {/* top */}
            <LearnMore />
            <Nutrients />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
