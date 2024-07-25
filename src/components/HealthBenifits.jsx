import pushup from "../assets/pushup.png";
import yolk from "../assets/yolk.png";

function HealthBenifits() {
  return (
    <div className="flex flex-col sm:flex-row w-full items-center justify-between px-[6vw] gap-6 sm:gap-0">
      <div className="w-full sm:w-1/2">
        {/* left */}
        <h2 className="font-sans font-extrabold text-[8vw] sm:text-[4.5vw] md:text-[4vw] lg:text-[4vw] 2xl:text-[4vw] text-center sm:text-left tracking-wide text-[#FFD729] mb-4 sm:mb-6 lg:mb-12">
          HEALTH BENEFITS
        </h2>
        <ol className="text-[3vw] sm:text-[1.7vw] lg:text-[1.6vw] xl:text-[1.6vw] font-ubuntu font-medium list-decimal list-inside flex flex-col gap-y-[1.5vw] px-6 sm:px-0 ">
          <li>High-quality protein source for muscle growth.</li>
          <li>Rich in essential vitamins and minerals.</li>
          <li>Contains antioxidants for eye health.</li>
          <li>Promotes brain health with choline.</li>
          <li>Supports heart health with omega-3s.</li>
          <li>Aids weight management, keeps you full.</li>
          <li>Boosts immune system with essential nutrients.</li>
        </ol>
      </div>
      <div className="flex justify-end items-center relative">
        {/* right */}
        <img
          src={pushup}
          alt=""
          className="w-[45vw] h-[60vw] sm:w-[26vw] sm:h-[32vw] lg:w-[24vw] lg:h-[30vw] xl:w-[23vw] xl:h-[30vw] object-cover rounded-[32px] sm:rounded-[64px] -rotate-6 "
        />
        <div className="yolk_img">
          <img
            src={yolk}
            alt=""
            className=" object-cover w-[16vw] sm:w-[12vw] xl:w-[12vw]  -translate-y-14 xl:-translate-y-20 2xl:-translate-y-32 -translate-x-8 sm:-translate-x-16 xl:-translate-x-20"
          />
        </div>
      </div>
    </div>
  );
}

export default HealthBenifits;
