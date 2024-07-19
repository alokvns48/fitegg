import { useEffect, useRef } from "react";
import authentic from "../assets/authentic.svg";

function Nutrients() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    const card = container.querySelector(".card");
    const sneaker = container.querySelector(".sneaker");

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + window.scrollX + rect.width / 2;
      const centerY = rect.top + window.scrollY + rect.height / 2;
      let xAxis = (centerX - e.pageX) / 25;
      let yAxis = (centerY - e.pageY) / 25;
      card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
    };

    const handleMouseEnter = () => {
      card.style.transition = `none`;
      sneaker.style.transform = "translateZ(50px)";
    };

    const handleMouseLeave = () => {
      card.style.transition = `all 0.5s ease`;
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      sneaker.style.transform = "translateZ(0px)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="container p-[2rem]" ref={containerRef}>
      <div className="card relative w-[350px]  p-5  border border-yellow-900 ">
        <img
          src={authentic}
          alt="authentic"
          className="w-40 absolute -top-[20%] right-[8%]"
        />
        <div className="sneaker flex flex-col justify-center whitespace-nowrap border-solid overflow-hidden">
          <h2 className="text-lg font-medium leading-8 text-[#B48C81]">
            CALORIES
          </h2>
          <div className="shrink-0 mt-2.5 h-px bg-yellow-900 border border-yellow-900 border-solid" />
          <p className="mt-2.5 text-6xl font-bold text-yellow-900  leading-[54px] tracking-[3.6px] font-bigshoulders">
            68
          </p>
          <h2 className="text-lg font-medium leading-8 text-[#B48C81]">
            PROTEIN
          </h2>
          <div className="shrink-0 mt-2.5 h-px bg-yellow-900 border border-yellow-900 border-solid" />
          <p className="mt-2.5 text-6xl font-bold text-yellow-900 b leading-[54px] tracking-[3.6px] font-bigshoulders">
            6g
          </p>
          <h2 className="text-lg font-medium leading-8 text-[#B48C81]">FAT</h2>
          <div className="shrink-0 mt-2.5 h-px bg-yellow-900 border border-yellow-900 border-solid" />
          <p className="mt-2.5 text-6xl font-bold text-yellow-900  leading-[68px] tracking-[3.6px] font-bigshoulders">
            4.8g
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nutrients;
