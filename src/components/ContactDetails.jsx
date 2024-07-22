import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function ContactDetails() {
  return (
    <div className="flex justify-center items-center gap-[8vw]">
      <h2 className="text-[3vw] font-bold text-[#713e11] text-center">
        Contact Us
      </h2>
      <div className="border-2 h-[200px] w-[350px] rounded-2xl flex items-center pl-12">
        <ul className="flex flex-col font-semibold gap-4">
          <li className="flex gap-4">
            <FontAwesomeIcon
              size="xl"
              icon={faPhone}
              style={{ color: "#713e11" }}
            />{" "}
            <span>+91 9876543210</span>
          </li>
          <li className="flex gap-4">
            <FontAwesomeIcon
              size="xl"
              icon={faEnvelope}
              style={{ color: "#713e11" }}
            />{" "}
            <span>info@fitegg.in</span>
          </li>
          <li className="flex gap-4">
            <FontAwesomeIcon
              size="xl"
              icon={faInstagram}
              style={{ color: "#713e11" }}
            />
            <span>fitegg_007</span>
          </li>
        </ul>
      </div>
      <div className="border-2 h-[200px] w-[350px] rounded-2xl flex items-center pl-12 gap-4">
        <FontAwesomeIcon
          size="xl"
          icon={faLocationDot}
          style={{ color: "#713e11" }}
        />
        <p>Lucknow, Prayagraj, Buxar lore</p>
      </div>
    </div>
  );
}

export default ContactDetails;
