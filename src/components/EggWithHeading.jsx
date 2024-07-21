import { useEffect, useState } from "react";
import eggwithqr from "../assets/eggwithqr.svg";
import qr from "../assets/qr.png";

function EggWithHeading() {
  const [translateEggImg, setTranslateEggImg] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const translateAmount = window.scrollY / 4;
      console.log(
        `Scroll Y: ${window.scrollY}, Translate Amount: ${translateAmount}`
      );
      setTranslateEggImg(translateAmount);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* left section */}
      <h1 className="font-bigshoulders text-[10vw] font-[700] text-[#e50101] text-center fitEggText">
        FITEGG
      </h1>
      <div
        className="relative"
        style={{ transform: `translateY(${translateEggImg}px) translateY(-140px) translateX(-60px)` }}
      >
        <div className="absolute top-[35%] left-[52%]">
          <h1 className="fit-egg-text text-center text-5xl font-bigshoulders font-medium">
            FITEGG
          </h1>
          <img src={qr} alt="" className="w-[100px]" />
        </div>
        <img src={eggwithqr} alt="" className="eggImg " />
      </div>
    </>
  );
}

export default EggWithHeading;
