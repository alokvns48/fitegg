import pushup from "../assets/pushup.png"
import yolk from "../assets/yolk.png"
function HealthBenifits() {
  return (
    <div className="flex flex-col h-full w-full px-[6vw] pt-20">
      <h2 className="font-ultra text-[2.5vw] tracking-wide text-[#FFD729] mb-12">
        /HEALTH BENEFITS/
      </h2>
      <div>
        <div>
          {/* left */}
          <ol className="text-xl font-bold list-decimal flex flex-col gap-y-8 pl-6">
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
        <div>
          {/* right */}
          <img src={pushup} alt="" />
          <img src={yolk} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HealthBenifits;
