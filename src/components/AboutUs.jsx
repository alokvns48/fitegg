import aboutUsVideo from "../assets/aboutus_video.mp4";

function AboutUs() {
  return (
    <div className="AboutUsWrapperDiv flex flex-col px-[6vw] xl:px-24 lg:pt-28 pt-10 min-h-[100vh] ">
      <h2 className="font-sans font-extrabold text-[2rem] sm:text-[2.5rem] lg:text-[4vw] 2xl:text-[5vw] tracking-wide sm:mb-12 md:mb-8 text-center md:text-left">
        ABOUT US
      </h2>
      <div className="flex lg:flex-row flex-col sm:gap-7 lg:gap-0 w-full justify-between items-center text-[#042F1A] ">
        {/* left */}
        <p className="font-ubuntu my-3 sm:my-0 text-[14px] lg:text-[1rem] 2xl:text-2xl lg:w-[48%] w-full">
          Welcome to FIT EGG, your trusted source for high-quality eggs. With
          multiple locations, our mission is to deliver freshness and excellence
          in every egg we sell. At FIT EGG, we take pride in sourcing premium
          eggs from reliable suppliers, ensuring they meet our rigorous quality
          standards. Our commitment extends beyond product quality—we aim to
          provide exceptional customer service and a seamless shopping
          experience. Whether you visit us in-store or shop with us online, we
          guarantee that every egg you purchase is a symbol of quality and care.
          Discover the FIT EGG difference today and enjoy the best in eggs!
        </p>
        {/* right */}
        <video
          src={aboutUsVideo}
          autoPlay
          loop
          muted
          className="lg:w-[48%] sm:w-[55%] md:w-[50%] rounded-3xl "
        />
      </div>
    </div>
  );
}

export default AboutUs;
