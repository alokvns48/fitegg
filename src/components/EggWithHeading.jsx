import { useEffect, useState } from "react";
import eggwithqr from "../assets/new-egg.png";

function EggWithHeading() {
  const [translateEggImg, setTranslateEggImg] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const translateAmount = Math.log(window.scrollY + 1) * 9;
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
      <h1 className="font-bigshoulders text-[10vw] font-[700] text-[#e50101] text-center fitEggText self-start mx-auto">
        FITEGG
      </h1>

      <img
        src={eggwithqr}
        alt="Egg With Qr Img"
        className="eggImg mx-auto w-[30vw]"
        style={{
          transform: `translateY(${translateEggImg}px) translateX(-1.3rem) translateY(-21.5%)`,
        }}
      />
    </>
  );
}

export default EggWithHeading;
