import pushup from "../assets/pushup.png";
import yolk from "../assets/yolk.png";

function HealthBenifits() {
  return (
    <div className="flex w-full  min-h-[50rem]  items-center justify-between px-[6vw]   ">
      <div className="w-1/2">
        {/* left */}
        <h2 className="font-sans font-extrabold text-[3vw] tracking-wide text-[#FFD729] mb-12">
          HEALTH BENEFITS
        </h2>
        <ol className="text-[1.4vw] font-ubuntu font-semibold list-decimal list-inside flex flex-col gap-y-[1.5vw] ">
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
          className="w-[24vw] h-[30vw] xl:w-[23vw] xl:h-[30vw] object-cover rounded-[64px] -rotate-6 "
        />
        <div className="yolk_img">
          <img
            src={yolk}
            alt=""
            className=" object-cover w-[12vw] xl:w-[12vw]  -translate-y-14 xl:-translate-y-20 2xl:-translate-y-32 -translate-x-16 xl:-translate-x-20"
          />
        </div>
      </div>
    </div>
  );
}

export default HealthBenifits;
