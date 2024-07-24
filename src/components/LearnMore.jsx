import bookicon from "../assets/book-icon.svg";

function LearnMore() {
  return (
    <>
      <div className="mr-5 w-[12.5rem] pt-[2.5rem] learnMoreContainer">
        <div className="flex items-center justify-center">
          <p className="font-acme text-2xl ">
            “Ek kadam <br />
            sehat ki or, <br />
            Because healthly
            <br /> life is our <br />
            responsibility”
          </p>
        </div>
        <button className="focus:outline-none text-lg py-2.5 px-6 rounded-lg bg-gradient-to-b from-[#b5852d] to-[#eabb64] border-2 border-[#323232] border-b-[5px]  transform transition-transform duration-200 linear cursor-pointer active:translate-y-[3px]  tracking-wider font-bigshoulders  text-white mt-12  w-full bg-[#C39132] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <div className="flex items-center justify-center w-[100%]">
            <img src={bookicon} alt="" />
            LEARN MORE
          </div>
        </button>
      </div>
    </>
  );
}

export default LearnMore;
