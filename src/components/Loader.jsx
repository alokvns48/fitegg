import React from "react";
import "../loader.css";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#FFF6F6]">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
