import { HashLink } from "react-router-hash-link";
import bookicon from "../assets/book-icon.svg";

function Button({ marginTop , width}) {
  const classes = `focus:outline-none text-lg py-2.5 rounded-lg bg-gradient-to-b from-[#b5852d] to-[#eabb64] border-2 border-[#323232] border-b-[5px] transform transition-transform duration-200 linear cursor-pointer active:translate-y-[3px] tracking-wider font-bigshoulders text-white bg-[#C39132] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${marginTop} ${width}`;
  return (
    <button className={classes} >
      <HashLink smooth to="#about">
      <div className="flex items-center justify-center">
        <img src={bookicon} alt="book icon" />
        LEARN MORE
      </div>
      </HashLink>
    </button>
  );
}

export default Button;
