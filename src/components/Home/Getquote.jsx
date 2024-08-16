import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Getquote() {
  const form = useRef();
  const [emailError, setEmailError] = useState(true);
  const [submitted, setsubmitted] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = form.current.user_email.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError(false);
      return;
    } else {
      setEmailError(true);
      emailjs
        .sendForm(
          `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
          `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
          form.current,
          {
            publicKey: `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`,
          }
        )
        .then(
          () => {
            setsubmitted(false);
            setTimeout(() => {
              setsubmitted(true);
            }, 10000);
          },
          (error) => {
            setsubmitted(true);
          }
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h6 className="text-center text-2xl mb-4 font-semibold">Get Quote</h6>
        <form ref={form} onSubmit={handleSubmit}>
          <input
            required
            placeholder="Name"
            name="user_name"
            className="focus:border-blue-600 h-10 pl-3 mb-3 w-full border border-gray-300 rounded-md outline-none placeholder-gray-300 text-sm"
          />
          <input
            required
            placeholder="Email"
            name="user_email"
            className={`focus:border-blue-600 h-10 pl-3 w-full border border-gray-300 rounded-md outline-none placeholder-gray-300 text-sm ${
              emailError ? "mb-3" : "border-red-500"
            }`}
          />
          <label
            className={`text-xs text-red-500 ${emailError ? "hidden" : ""}`}
          >
            Enter a valid email
          </label>
          <textarea
            required
            name="message"
            placeholder="Tell us about your needs"
            className="focus:border-blue-600 h-24 pl-3 pt-2 mb-3 w-full border border-gray-300 rounded-md outline-none resize-none placeholder-gray-300 text-sm"
          />
          <input
            type="submit"
            value={submitted ? "Send" : "Information Submitted!"}
            className="bg-blue-800 hover:bg-blue-900 text-white rounded-md cursor-pointer w-full h-10"
          />
        </form>
      </div>
    </div>
  );
}

export default Getquote;
