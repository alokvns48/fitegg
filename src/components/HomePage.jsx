import Navbar from "./Navbar";
import eggbread from "../assets/breadegg.png";
import bookicon from "../assets/book-icon.svg";
import Nutrients from "./Nutrients";
import EggWithHeading from "./EggWithHeading";

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
            <div className="">
              {/* learn more */}
              <div className="mr-5 w-[200px] pt-[2rem]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, at? Obcaecati ullam amet aut quam, cum iste! Obcaecati
                  maiores iste tenetur culpa cupiditate similique impedit
                  corrupti exercitationem porro? Eligendi, omnis.
                </p>
                <button className="focus:outline-none text-lg py-2.5 px-6 rounded-lg bg-gradient-to-b from-[#b5852d] to-[#eabb64] border-2 border-[#323232] border-b-[5px]  transform transition-transform duration-200 linear cursor-pointer active:translate-y-[3px]  tracking-wider font-bigshoulders  text-white mt-12  w-full bg-[#C39132] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                  <div className="flex items-center justify-center">
                    <img src={bookicon} alt="" />
                    LEARN MORE
                  </div>
                </button>
              </div>
            </div>
            <div className="flex-1">
              {/* details */}
              <Nutrients />
            </div>
          </div>
          <div>
            {/* bottom */}
            <p className="font-inconsolata text-2xl leading-6 -tracking-wide text-[#482006]">
              One FITEGG containing every promise of
            </p>
            <div className="flex">
              <div className="font-bigshoulders mr-12">
                <p className="text-8xl font-bold text-[#FAB303]">HEALTHY</p>
                <p className="text-8xl font-bold text-[#FAB303]">EATING</p>
              </div>
              <img src={eggbread} alt="breadegg" className="w-[20rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
