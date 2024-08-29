import { useState } from "react";
import AnimatedInput from "./AnimatedInput";
import AnimatedTextArea from "./AnimatedTextArea";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;

    if (!name.trim()) {
      setResult("Name is required.");
      return false;
    }
    if (!mobile.trim() || !mobileRegex.test(mobile)) {
      setResult("A valid 10-digit mobile number is required.");
      return false;
    }
    if (!email.trim() || !emailRegex.test(email)) {
      setResult("A valid email is required.");
      return false;
    }
    if (!message.trim()) {
      setResult("Message is required.");
      return false;
    }
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", "7fc132da-13ef-4cc0-a10a-d87a3da08513");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5 md:px-10">
      <form className="w-full" onSubmit={onSubmit}>
        <h2 className="text-2xl text-[#5d3327] font-semibold text-center mb-6">
          Fill the form for any Queries
        </h2>
        <div className="flex flex-wrap -mx-3 mb-0">
          <div className="w-full md:w-1/2 px-3 mb-0 md:mb-0">
            <AnimatedInput
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <AnimatedInput
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              type="text"
              label="Mobile"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-0">
          <div className="w-full px-3">
            <AnimatedInput
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-0 leading-tight focus:outline-none focus:bg-white"
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <AnimatedTextArea
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-3xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
              label="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></AnimatedTextArea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <button
              className="w-full bg-[#713e11d7] hover:bg-[#713e11] text-white font-bold py-3 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
      <p >{result}</p>
    </div>
  );
};

export default ContactForm;
