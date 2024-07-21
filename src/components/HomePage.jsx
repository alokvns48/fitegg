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
        <div className="">
          {/* left section */}
          <EggWithHeading />
        </div>
        <div className="">
          {/* Right section */}
          <div className="mt-24 flex">
            {/* top */}
            <div>
            <HealthyEating/>
            <LearnMore/>
            </div>
            
            <Nutrients/>            
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
