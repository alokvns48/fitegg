import bg_orange from "../assets/bg_orange.gif";
import hen_egg from "../assets/hen-egg.png";
function BetterSection() {
  return (
    <div
      className="w-full min-h-screen bg-repeat "
      style={{ backgroundImage: `url(${bg_orange})` }}
    >
      <div className="pt-24 px-24 bg-gradient-to-b from-[#F6F6F6]">
        <h2 className="text-[3vw] font-ultra text-[#DA3A3B] ">
          /HOW ARE WE BETTER? /
        </h2>
        <div className="flex justify-between items-center pt-20">
          <div className="flex flex-col items-center">
            <h2 className="font-ultra text-[#C39132] text-[2vw] text-center">
              FIT EGG
            </h2>
            <ol className="flex flex-col list-decimal font-ubuntu text-[1.4vw] gap-2 mt-6">
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ol>
          </div>
          <div>
            <img src={hen_egg} alt="" className="w-[32vw]" />
          </div>
          <div className="flex flex-col items-center pl-8">
            <h2 className="font-ultra text-[#585858] text-[2vw] text-center">
              REGULAR
            </h2>
            <ol className="flex flex-col justify-center items-center list-decimal font-ubuntu text-[1.4vw] gap-2 mt-6">
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BetterSection;
