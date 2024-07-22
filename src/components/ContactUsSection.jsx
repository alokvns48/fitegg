import bg_orange from "../assets/bg_orange.gif";
import ContactDetails from "./ContactDetails";


function ContactUsSection() {
  return (
    <div
      className="w-full min-h-screen bg-repeat"
      style={{ backgroundImage: `url(${bg_orange})` }}
    >
      <div className="pt-24 px-24">
        <ContactDetails/>
        <div>
            <h2>Fill the form for any Queries</h2>
            <div>
                <form action="">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Mobile"/>
                    <input type="textarea" placeholder="Message"/>
                    <button>Send</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
