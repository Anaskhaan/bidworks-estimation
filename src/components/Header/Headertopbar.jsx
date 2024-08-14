import React from "react";

function Headertopbar() {
  return (
    <div className="bg-[#265077] text-white text-[14px] z-10">
      <div className="mx-[10px] flex flex-col items-center responsive-box responsive-flexbox">
        <h6 className="flex py-[5px]  items-center gap-2 ">
          <img
            className="w-[18px] h-[18px] "
            src="assets/email.svg"
            alt="mail svg"
          />
          <a
            href="mailto:info@bidworksestimating.com"
            className="text-white uppercase "
          >
            info@bidworksestimating.com
          </a>
        </h6>
        <div className="flex gap-2 items-center">
          <h6 className="flex items-center py-[5px] text-[14px] gap-1 text-nowrap">
            <img
              className="w-[20px] h-[20px]"
              src="assets/phone.svg"
              alt="phone svg"
            />
            <a href="tell:+15713844490" className="text-white">
              571-384-4490
            </a>
          </h6>
          <div className="bg-black cursor-pointer">
            <div className="font-bold flex items-center px-2 ">
              <h6 className="text-nowrap">GET QUOTES</h6>
            </div>
          </div>
          {/* <img
            className="w-[20px] h-[20px] cursor-pointer hover:opacity-70"
            src="assets/facebook.svg"
          /> */}
          <img
            className="w-[20px] h-[20px] cursor-pointer hover:opacity-70"
            src="assets/linkedin.svg"
            alt="linkedIn svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Headertopbar;
