import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import eggwithqr from "../assets/new-egg.png";

function EggWithHeading() {
  const [translateEggImg, setTranslateEggImg] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const translateAmount = window.scrollY / 4;
      setTranslateEggImg(translateAmount);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMaxScreenWidth1000px = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div className="flex flex-col content-center overflow-y-hidden w-[100%]">
      {/* left section */}
      <h1 className="font-bigshoulders text-[10vw] leading-[10vw] font-[700] text-[#e50101] text-center fitEggText self-start mx-auto mt-[3rem]">
        FITEGG
      </h1>

      <img
        src={eggwithqr}
        alt="Egg With Qr Img"
        className="eggImg mx-auto w-[30vw]"
        style={{
          transform: `translateY(${translateEggImg}px) translateX(-1.3rem) translateY(${isMaxScreenWidth1000px ? "-6.5%" : "-16.5%"})`,
        }}
      />
    </div>
  );
}

export default EggWithHeading;
