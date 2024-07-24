import aboutUsVideo from "../assets/aboutus_video.mp4";

function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-0">
      <div className="w-full md:w-1/2 mr-10">
        <h2 className="font-sans font-extrabold text-[4vw] md:text-[3vw] tracking-wide text-[#DA3A3B] mb-12 text-center md:text-left">
          ABOUT US
        </h2>
        {/* left */}
        <p className="font-ubuntu text-[14px] lg:text-base xl:text-xl 2xl:text-2xl">
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
      </div>
      <div className="flex justify-center ">
        {/* right */}
        {/* <img
          src={aboutUsImg}
          alt=""
          className="w-[500px] lg:w-[550px] xl:w-[650px] xl:h-[350px] mt-20 border-4 border-[#9A7C6D] rounded-2xl"
        /> */}
        <video
          src={aboutUsVideo}
          autoPlay
          loop
          muted
          className="w-[500px] lg:w-[550px] xl:w-[650px] xl:h-[350px] mt-20 rounded-3xl"
        />
      </div>
    </div>
  );
}

export default AboutUs;
