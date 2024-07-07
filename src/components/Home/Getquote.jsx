import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Getquote() {
  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("service_an8s0ui", "template_qnm4wge", form.current, {
        publicKey: "8Vap-riHXffJuUl0Y",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className=" max-w-[1200px] flex flex-col justify-center md:flex-row md:justify-normal ">
      <div className="flex flex-col items-center justify-center gap-[20px]  md:w-[60%] mt-[40px]">
        <img src="" alt="website logo" />
        <h6>Bidding Process, Simplified</h6>
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
              className="focus-within:!border-blue-600 h-[36px] pl-[10px] mb-[10px] w-full border border-gray-300 rounded-md outline-none placeholder:text-gray-300 placeholder:text-[14px] text-[14px]"
            ></input>
            <textarea
              required
              name="message"
              placeholder="Tell us about your needs"
              className="focus-within:!border-blue-600 h-[100px] pl-[10px] pt-2 mb-[10px] w-full border border-gray-300 rounded-md outline-none resize-none placeholder:text-gray-300 placeholder:text-[14px] text-[14px]"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="bg-blue-800 mb-[40px] hover:bg-blue-900 text-white rounded-md cursor-pointer w-full h-[36px]"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Getquote;
