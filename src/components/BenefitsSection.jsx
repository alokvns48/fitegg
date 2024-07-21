import bg_orange from "../assets/bg_orange.gif";
import benefits_left from "../assets/benefits-left.png";
import benefits_right from "../assets/benefits-right.png";
import circle from "../assets/circle.png";
import benefit_egg from "../assets/benefit-egg.png";

function BenefitsSection() {
  return (
    <div
      className="w-full min-h-screen bg-repeat "
      style={{ backgroundImage: `url(${bg_orange})` }}
    >
      <div className="pt-24">
        <div className="flex flex-col justify-center items-center w-full min-h-screen bg-[#F6F6F6] rounded-t-[150vh] pt-16 pb-24">

          <div className="relative flex items-center justify-center">
            <h2 className="text-[9vw] font-sans font-[900] text-center text-[#F5CB1D]">
              BENEFITS
            </h2>
            <h3 className="absolute text-[3vw] opacity-50">FIT EGG</h3>
          </div>

          <div className="flex justify-center">
            <div className="pt-16">
              <img
                src={benefits_left}
                alt=""
                className="w-[24vw] translate-y-6"
              />
            </div>
            <div className="relative mx-6 flex flex-col justify-center items-center">
              <img src={circle} alt="" className=" w-[28vw]" />
              <img
                src={benefit_egg}
                alt=""
                className="absolute translate-y-24 w-[20vw] "
              />
            </div>
            <div className="pt-16">
              <img
                src={benefits_right}
                alt=""
                className="w-[24vw] translate-y-6"
              />
            </div>
          </div>

          <button className="px-16 py-4 text-white  rounded-3xl bg-[#F5CB1D] mt-24">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
