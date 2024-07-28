import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import img from "../assets/navlogo.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const HamburgerButton = ({ isNavOpen, onClick }) => (
  <button
    className="fixed top-4 right-4 z-50 flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer focus:outline-none "
    onClick={onClick}
    aria-label="Toggle navigation"
    aria-controls="nav-menu"
  >
    <div className="bg-[#5d3327] space-y-2 p-2 rounded-lg">
      <span
        className={`block w-6 h-0.5 bg-[#fffefe] transition-transform duration-300 ease-in-out ${
          isNavOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-[#fffefe] transition-opacity duration-300 ease-in-out ${
          isNavOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-[#fffefe] transition-transform duration-300 ease-in-out ${
          isNavOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </div>
  </button>
);

const NavMenu = ({ isNavOpen, onClose }) => (
  <div
    className={`fixed inset-0 bg-white bg-opacity-90 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
      isNavOpen ? "translate-x-0" : "translate-x-full"
    }`}
    id="nav-menu"
  >
    <button
      className="absolute text-3xl border-2 bg-[#5d3327] px-[0.9rem] py-[0.2rem] mr-2 rounded-lg top-4 right-4 z-50 text-[#fffefe]"
      onClick={onClose}
      aria-label="Close navigation"
    >
      -
    </button>
    <img src={img} className="w-28 h-28 mb-12 mt-12" alt="Logo" />
    <ul className="h-full flex flex-col items-center justify-start gap-10 pt-10 text-[#5d3327] text-[10vw] text-center mb-8 font-acme">
      <li className="cursor-pointer transition-all duration-500 ease-in-out transform hover:text-[#a04e3c] hover:scale-105 animate-fadeInUp">
        {" "}
        <HashLink to="#home" onClick={onClose}>Home</HashLink>
      </li>
      <li className="cursor-pointer transition-all duration-500 ease-in-out transform hover:text-[#a04e3c] hover:scale-105 animate-fadeInUp">
        <HashLink  to="#about" onClick={onClose}>
          About
        </HashLink>
      </li>
      <li className="cursor-pointer transition-all duration-500 ease-in-out transform hover:text-[rgb(160,78,60)] hover:scale-105 animate-fadeInUp">
      <HashLink  to="#benefit" onClick={onClose}>Benefits</HashLink>
      </li>
      <li className="cursor-pointer transition-all duration-500 ease-in-out transform hover:text-[#a04e3c] hover:scale-105 animate-fadeInUp">
      <HashLink  to="#contact" onClick={onClose}>Contact</HashLink>
      </li>
    </ul>
    <div className="flex items-center justify-between gap-0 px-10 w-full text-[#5d3327] text-3xl mt-auto mb-6">
      <FaInstagram className="cursor-pointer" onClick={onClose} />
      <FaFacebook className="cursor-pointer" onClick={onClose} />
      <FaLinkedin className="cursor-pointer" onClick={onClose} />
    </div>
  </div>
);

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMaxScreenWidth650px = useMediaQuery({ query: "(max-width: 768px)" });

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
    toggleBodyScroll(!isNavOpen);
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
    toggleBodyScroll(false);
  };

  const toggleBodyScroll = (disable) => {
    if (disable) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <div className="relative border-b-2 border-[#5d3327]">
      <div
        className={`flex items-center ${
          isMaxScreenWidth650px ? "justify-between px-4" : "absolute left-4"
        }`}
      >
        <img
          src={img}
          className={`w-16 sm:w-24 ${
            isMaxScreenWidth650px ? "scale-110 translate-y-2.5 -translate-x-6" : "h-24"
          }`}
          alt="Logo"
        />
        {isMaxScreenWidth650px && !isNavOpen && (
          <HamburgerButton isNavOpen={isNavOpen} onClick={handleToggleNav} />
        )}
      </div>
      <div className="w-full md:h-20 flex items-center justify-center">
        <ul className="hidden md:flex gap-8 sm:gap-16 lg:gap-32 mx-auto text-[#5d3327] text-base sm:text-lg">
          <li className="cursor-pointer transition-all duration-500 ease-in-out transform hover:text-[#a04e3c] hover:font-semibold hover:scale-105 animate-fadeInUp">
            <HashLink smooth to="#home">
              Home
            </HashLink>
          </li>
          <li className="cursor-pointer transition-all duration-500 ease-in-out transform hover:text-[#a04e3c] hover:font-semibold hover:scale-105 animate-fadeInUp">
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li className="cursor-pointer transition-all duration-500 ease-in-out transform hover:text-[#a04e3c] hover:font-semibold hover:scale-105 animate-fadeInUp">
            <HashLink smooth to="#benefit">
              Benefits
            </HashLink>
          </li>
          <li className="cursor-pointer transition-all duration-500 ease-in-out transform hover:text-[#a04e3c] hover:font-semibold hover:scale-105 animate-fadeInUp">
            <HashLink smooth to="#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
      {isMaxScreenWidth650px && (
        <NavMenu isNavOpen={isNavOpen} onClose={handleCloseNav} />
      )}
    </div>
  );
}

export default Navbar;
