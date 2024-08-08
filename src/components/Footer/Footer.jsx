import React from "react";

function Footer() {
  return (
    <div className="bg-[#022140] text-white items-center">
      <div className="mx-[10px] w-auto py-[20px] flex flex-col items-center responsive-footer">
        {/* first col */}
        <div className="mt-[20px]">
          <img
            className="w-32"
            src="assets/LogoWithText.png"
            alt="website logo"
          />
        </div>
        {/* second col */}
        <div className="flex flex-col gap-2 mt-[20px]">
          <h6 className="font-semibold text-[18px] cursor-pointer">
            More Information
          </h6>
          <ul className="ml-[5px] text-[14px]">
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Request A Quote
            </li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              FAQ-Frequently Asked Questions
            </li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Takeoff Examples
            </li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">Blogs</li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Reviews
            </li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Contact Us
            </li>
          </ul>
        </div>
        {/* third col */}
        <div className="mt-[20px]">
          <div className="mt-[20px]">
            <h6 className="font-semibold text-[18px] cursor-pointer">
              Newsletter & Discounts
            </h6>
            <input
              className="my-[10px] text-[18px] text-[#686666] py-[10px] px-[10px] rounded-sm w-full bg-white outline-none"
              placeholder="Your Email Address"
            ></input>
            <h6 className="font-semibold text-[18px] cursor-pointer">
              Stay Connected
            </h6>
            <h6 className="font-bold pt-4">Address</h6>
            <ul>
              <li>7443 FOXLEIGH WAY </li>
              <li>ALEXANDRIA, VA 22315</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
