import React from "react";

function Footerbottombar() {
  return (
    <div className="bg-[#265077] text-white text-[14px]">
      <div className="mx-[10px] w-auto py-[10px] flex flex-col-reverse items-center responsive-footerbottombar">
        <h6 className="flex py-[5px] items-center text-center justify-center gap-2 flex-wrap">
          Copyright © 2018 Rocket Takeoffs- All Rights Reserved |
          <span className="font-bold cursor-pointer">Privacy Policy</span>|
          <span className="font-bold cursor-pointer">Terms & Conditions</span>
        </h6>
        <div className="flex gap-3 items-center">
          <img
            className="w-[35px] h-[35px] cursor-pointer hover:opacity-70"
            src="assets/facebook.svg"
          />
          <img
            className="w-[35px] h-[35px] cursor-pointer hover:opacity-70"
            src="assets/linkedin.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Footerbottombar;
