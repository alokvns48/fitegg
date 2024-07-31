import AnimatedInput from "./AnimatedInput";
import AnimatedTextArea from "./AnimatedTextArea";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 md:px-10">
      <form className="w-full">
        <h2 className="text-2xl text-[#5d3327] font-semibold text-center mb-6">Fill the form for any Queries</h2>
        <div className="flex flex-wrap -mx-3 mb-0">
          <div className="w-full md:w-1/2 px-3 mb-0 md:mb-0">
            <AnimatedInput
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              label="Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <AnimatedInput
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="text"
              label="Mobile"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-0">
          <div className="w-full px-3">
            <AnimatedInput
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-0 leading-tight focus:outline-none focus:bg-white"
              type="email"
              label="Email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <AnimatedTextArea
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
              label="Message"
            ></AnimatedTextArea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <button
              className="w-full bg-[#713e11d7] hover:bg-[#713e11] text-white font-bold py-3 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
