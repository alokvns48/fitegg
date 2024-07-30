import bg_orange from "../assets/bg_orange.gif";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function ContactUsSection() {
  return (
    <div
      id="contact"
      className="w-full bg-custom-gradient-7 "
      
    >
      <div className="pt-24 px-10 md:px-24">
        <div className="">
          <ContactDetails />
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
