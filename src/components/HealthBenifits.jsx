import pushup from "../assets/pushup.png"
import yolk from "../assets/yolk.png"
function HealthBenifits() {
  return (
    <div className="flex flex-col h-full w-full px-[6vw] pt-20">
      <h2 className="font-ultra text-[2.5vw] tracking-wide text-[#FFD729] mb-12">
        /HEALTH BENEFITS/
      </h2>
      <div className="flex">
        <div>
          {/* left */}
          <ol className="text-[1.4vw] font-ubuntu font-bold list-decimal flex flex-col gap-y-[1.5vw] pl-6">
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
        <div className="flex pl-24 ml-10 -translate-y-6">
          {/* right */}
          <img src={pushup} alt="" className="w-[416px] h-[631px] rounded-[64px] -rotate-6"/>
          <img src={yolk} alt="" className="w-[232px] -translate-y-32 -translate-x-20"/>
        </div>
      </div>
    </div>
  );
}

export default HealthBenifits;
