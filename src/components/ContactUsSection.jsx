import bg_orange from "../assets/bg_orange.gif";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function ContactUsSection() {
  return (
    <div
      className="w-full min-h-screen bg-repeat"
      style={{ backgroundImage: `url(${bg_orange})` }}
    >
      <div className="pt-24 px-10 md:px-24">
        <ContactDetails />
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
