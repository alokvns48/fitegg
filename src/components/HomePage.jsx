import Navbar from "./Navbar";
import HealthyEating from "./HealthyEating";
import Nutrients from "./Nutrients";
import EggWithHeading from "./EggWithHeading";
import LearnMore from "./LearnMore";

function HomePage() {
  return (
    <section className="w-full bg-[#fff8e3] px-24 min-h-[100vh]">
      <Navbar />
      <div className="HomePageContainerDiv flex justify-center gap-[80px]">
        <div className="flex flex-col content-center overflow-hidden">
          {/* left section */}
          <EggWithHeading />
        </div>
        <div className="">
          {/* Right section */}
          <HealthyEating/>
          <div className="flex justify-between 2xl:justify-normal">
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
