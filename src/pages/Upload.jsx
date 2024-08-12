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
    <div className=" max-w-[80%] flex flex-col justify-center md:flex-row md:justify-normal ">
      <div className="flex flex-col items-center justify-center gap-[20px]  md:w-[60%] mt-[40px]">
        <img
          src="assets/LoGO.png"
          alt="website logo"
          style={{
            width: "400px",
            height: "400px",
          }}
        />
      </div>
      <div className=" md:w-[40%] md:mx-[30px] mx-4 my-[70px]">
        <div className="pt-[40px] px-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg bg-white ">
          <h6 className="text-center text-[24px] mb-[10px] font-semibold">
            Get Quote
          </h6>
          <form ref={form} onSubmit={handleSubmit}>
            <input
              required
              placeholder="Name"
              name="user_name"
              className="focus-within:!border-blue-600 h-[36px] pl-[10px] mb-[10px] w-full border border-gray-300 rounded-md outline-none placeholder:text-gray-300 placeholder:text-[14px] text-[14px]"
            ></input>
            <input
              required
              placeholder="Email"
              name="user_email"
              className={`focus-within:!border-blue-600  h-[36px] pl-[10px]  w-full border border-gray-300 rounded-md outline-none placeholder:text-gray-300 placeholder:text-[14px] text-[14px] ${
                emailError ? "mb-[10px]" : "!border-red-500"
              }`}
            ></input>
            <label
              className={`text-[10px] text-red-500 ${
                emailError ? "hidden" : ""
              }`}
            >
              Enter Valid email
            </label>
            <textarea
              required
              name="message"
              placeholder="Tell us about your needs"
              className="focus-within:!border-blue-600 h-[100px] pl-[10px] pt-2 mb-[10px] w-full border border-gray-300 rounded-md outline-none resize-none placeholder:text-gray-300 placeholder:text-[14px] text-[14px]"
            ></textarea>
            <input
              type="submit"
              value={`${submitted ? "Send" : "Information Submitted!"}`}
              className="bg-blue-800 mb-[40px] hover:bg-blue-900 text-white rounded-md cursor-pointer w-full h-[36px]"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Getquote;
