import React from "react";

function Getquote() {
  return (
    <div className="flex flex-col justify-center md:flex-row md:justify-normal ">
      <div className="flex flex-col items-center justify-center gap-[20px]  md:w-[60%] mt-[40px]">
        <img src="" alt="website logo" />
        <h6>Bidding Process, Simplified</h6>
      </div>
      <div className=" md:w-[40%] md:mx-[30px] mx-4 my-[70px]">
        <div className="pt-[40px] px-[20px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg bg-white ">
          <h6 className="text-center text-[24px] mb-[10px] font-semibold">
            Get Quote
          </h6>
          <input
            placeholder="Name"
            className="focus-within:!border-blue-600 h-[36px] pl-[10px] mb-[10px] w-full border border-gray-300 rounded-md outline-none placeholder:text-gray-300 placeholder:text-[14px] text-[14px]"
          ></input>
          <input
            placeholder="Email"
            className="focus-within:!border-blue-600 h-[36px] pl-[10px] mb-[10px] w-full border border-gray-300 rounded-md outline-none placeholder:text-gray-300 placeholder:text-[14px] text-[14px]"
          ></input>
          <textarea
            placeholder="Tell us about your needs"
            className="focus-within:!border-blue-600 h-[100px] pl-[10px] pt-2 mb-[10px] w-full border border-gray-300 rounded-md outline-none resize-none placeholder:text-gray-300 placeholder:text-[14px] text-[14px]"
          ></textarea>
          <button className="bg-blue-800 mb-[40px] hover:bg-blue-900 text-white rounded-md cursor-pointer w-full h-[36px]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Getquote;
