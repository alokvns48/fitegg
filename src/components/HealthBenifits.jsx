import pushup from "../assets/pushup.png";
import yolk from "../assets/yolk.png";
function HealthBenifits() {
  return (
    <div className="flex w-full  min-h-[50rem]  items-center justify-between px-[6vw]   ">
      <div className="w-1/2">
        {/* left */}
        <h2 className="font-ultra text-[2.5vw] tracking-wide text-[#FFD729] mb-12">
          HEALTH BENEFITS
        </h2>
        <ol className="text-[1.4vw] font-ubuntu font-bold list-decimal list-inside flex flex-col gap-y-[1.5vw] ">
          <li className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem psum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        </ol>
      </div>
      <div className="flex justify-end items-center relative">
        {/* right */}
        <img
          src={pushup}
          alt=""
          className="w-[24vw] h-[30vw] xl:w-[23vw] xl:h-[30vw] object-cover rounded-[64px] -rotate-6 "
        />
        <img
          src={yolk}
          alt=""
          className="object-cover w-[12vw] xl:w-[12vw]  -translate-y-14 xl:-translate-y-20 2xl:-translate-y-32 -translate-x-16 xl:-translate-x-20"
        />
      </div>
    </div>
  );
}

export default HealthBenifits;
