import Navbar from "./Navbar";
import HealthyEating from "./HealthyEating";
import Nutrients from "./Nutrients";
import EggWithHeading from "./EggWithHeading";
import LearnMore from "./LearnMore";
import Button from "./Button";
import { useMediaQuery } from "react-responsive";

function HomePage() {
  const isMaxScreenWidth650px = useMediaQuery({
    query: "(max-width: 649.5px)",
  });

  return (
    <section className="w-full bg-[#fff8e3] px-24 HomePageSection">
      <Navbar />
      <div className="HomePageContainerDiv flex justify-center xl:gap-[80px]">
        {/* left section */}
        <EggWithHeading />
        {isMaxScreenWidth650px ? (
          <div className=" flex flex-col items-center w-[50vw] gap-3">
            <p className="font-acme text-center">
              “Ek kadam sehat ki or, Because healthly life is our
              responsibility”
            </p>
            <Button marginTop={"0rem"} width={"w-[40vw]"} />
          </div>
        ) : (
          ""
        )}
        <div className="homePageRightSectionContainer">
          {/* Right section */}
          <HealthyEating />
          <div className="flex justify-between 2xl:justify-normal learnMoreandNutrientsContainer">
            {/* top */}
            {!isMaxScreenWidth650px ? <LearnMore /> : ""}
            <Nutrients />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
