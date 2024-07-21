import Navbar from "./Navbar";
import HealthyEating from "./HealthyEating";
import Nutrients from "./Nutrients";
import EggWithHeading from "./EggWithHeading";
import LearnMore from "./LearnMore";

function HomePage() {
  return (
    <section className="w-full min-h-[100vh] bg-[#fff8e3] px-24">
      <Navbar />
      <div className="flex justify-center gap-[80px]">
        <div className="flex flex-col content-center">
          {/* left section */}
          <EggWithHeading />
        </div>
        <div className="">
          {/* Right section */}
          <HealthyEating/>
          <div className="flex">
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
