import gsap from "gsap";
import { useEffect, useRef } from "react";

function WhatItProviders() {
  const marqueElement = useRef(null);

  useEffect(() => {
    const marquee = marqueElement.current;
    const marqueAnimation = gsap.to(marquee, {
      x: `${100 / 3}%`,
      duration: 20,
      repeat: -1,
      ease: "linear", 
    });

    function handleMouseEnter() {
      marqueAnimation.pause();
    }

    function handleMouseLeave() {
      marqueAnimation.resume();
    }

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="overflow-hidden  marqueWrapperDiv sm:pt-8">
      <p className="text-[6vw] sm:text-[4.5vw] font-bigshoulders font-bold tracking-wide text-center text-[#3E2F08]">
        wHAT dOES FITEGG pROVIDES???
      </p>
      <div className="flex justify-center">
        <div
          ref={marqueElement}
          className="marque flex-shrink-0 flex justify-between items-center h-[80px] sm:h-[80px] md:h-[100px] lg:h-[150px] border-2 font-slackey text-[2.3vw] sm:text-[1.5vw] text-[#5a3f3f] py-2 md:py-4 lg:py-8 w-[300%] text-center"
        >
          <p className="border-l-2 h-full flex items-center pl-6">
            HIGH PROTIEN
          </p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">
            SOURCE OF OMEGA -3S
          </p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">EYE HEALTH</p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">
            BUILDS MUSCLES
          </p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">
            CONTRIBUTE TO BONE HEALTH
          </p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">
            HIGH PROTIEN
          </p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">
            SOURCE OF OMEGA -3S
          </p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">EYE HEALTH</p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">
            BUILDS MUSCLES
          </p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">
            CONTRIBUTE TO BONE HEALTH
          </p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">
            HIGH PROTIEN
          </p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">
            SOURCE OF OMEGA -3S
          </p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">EYE HEALTH</p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">
            BUILDS MUSCLES
          </p>
          <p className="border-l-2 h-full flex items-center sm:pl-6">
            CONTRIBUTE TO BONE HEALTH
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatItProviders;
