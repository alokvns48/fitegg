import React from "react";
import aboutUsImg from "../assets/aboutUsImg.png";

function AboutUs() {
  return (
    <div className="flex">
      <div className="w-1/2 mr-10">
        {/* left */}
        <h2 className="font-ultra text-3xl tracking-wide text-[#DA3A3B] mb-12">
          ABOUT US
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          ducimus minima, quasi natus facere explicabo repellat mollitia officia
          voluptas, vitae praesentium maxime at unde excepturi harum dolore.
          Aperiam, harum quisquam.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit quisquam ducimus laudantium!
          Voluptatibus veniam, unde dolorum at porro eos amet reprehenderit,
          voluptates ducimus, iure commodi quam animi deserunt sequi
          voluptatem.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Nobis ducimus minima, quasi natus facere explicabo repellat mollitia
          officia voluptas, vitae praesentium maxime at unde excepturi harum
          dolore. Aperiam, harum quisquam.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit quisquam ducimus laudantium!
          Voluptatibus veniam, unde dolorum at porro eos amet reprehenderit,
          voluptates ducimus, iure commodi quam animi deserunt sequi voluptatem.
        </p>
      </div>
      <div>
        {/* right */}
        <img
          src={aboutUsImg}
          alt=""
          className="w-[650px] h-[350px] mt-20 border-4 border-[#9A7C6D]"
        />
      </div>
    </div>
  );
}

export default AboutUs;
