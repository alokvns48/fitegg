import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import fssai from "../assets/fssai-logo.png";

function ContactDetails() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-[8vw]">
      <div>
        <h2 className="text-3xl md:text-[3vw] font-bold text-[#713e11] text-center py-4 ">
          Contact Us
        </h2>
        <hr className="xl:w-[50%] border-b-2 xl:border-b-[3px] border-[#713e11] rounded-xl xl:mt-2" />
      </div>
      <div className="flex flex-wrap gap-[8vw] justify-center items-center">
        <div className="border-2 border-[#713e1196] h-[180px] w-[320px] sm:h-[200px] sm:w-[350px] rounded-2xl flex items-center pl-12">
          <ul className="flex flex-col font-semibold gap-4">
            <li className="flex gap-4">
              <Link to="tel:+91 9876543210">
                <FontAwesomeIcon
                  size="xl"
                  icon={faWhatsapp}
                  style={{ color: "#713e11" }}
                />{" "}
                <span className="ml-2">+91 9334617048</span>
              </Link>
            </li>
            <li className="flex gap-4">
              <Link to="mailto:info@fitegg.in">
                <FontAwesomeIcon
                  size="xl"
                  icon={faEnvelope}
                  style={{ color: "#713e11" }}
                />{" "}
                <span className="ml-3">fitegg4@gmail.com</span>
              </Link>
            </li>
            <li className="flex gap-4">
              <Link to="https://instagram.com/fitegg__" target="_blank">
                <FontAwesomeIcon
                  size="xl"
                  icon={faInstagram}
                  style={{ color: "#713e11" }}
                />
                <span className="ml-4">fitegg__</span>
              </Link>
            </li>
            <li className="flex gap-4 font-semibold">
              <FontAwesomeIcon
                size="xl"
                icon={faLocationDot}
                style={{ color: "#713e11" }}
              />
              <p>Lucknow, Prayagraj, Buxar</p>
            </li>
          </ul>
        </div>
        <div className="border-2 border-[#713e1196] h-[180px] w-[320px] sm:h-[200px] sm:w-[350px] rounded-2xl flex items-center pl-12 gap-0">
          <ul>
            <li className="flex flex-col gap-4 items-center justify-center pt-4">
              <img
                src={fssai}
                alt=""
                className="w-28 items-center object-center"
              />
              <p className="text-lg">Lic.No: 10424040000045</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
