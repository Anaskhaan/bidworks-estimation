import React from "react";

function Footer() {
  return (
    <div className="bg-[#022140] text-white items-center">
      <div className="mx-[10px] w-auto py-[20px] flex flex-col items-center responsive-footer">
        {/* first col */}
        <div className="mt-[20px]">
          <img className="" src="" alt="website logo" />
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
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Monthly Membership
            </li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Client Log In Dashboard
            </li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Hablamos Español
            </li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Takeoff Examples
            </li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              About Us
            </li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Reviews
            </li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Gift Card
            </li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Contact Us
            </li>
          </ul>
        </div>
        {/* third col */}
        <div className="mt-[20px]">
          <h6 className="font-semibold text-[18px] cursor-pointer">
            Resources
          </h6>
          <ul className="ml-[5px] text-[14px]">
            <li className="mb-[5px] cursor-pointer hover:opacity-80">Blogs</li>
            <li className="mb-[5px] cursor-pointer hover:opacity-80">
              Construction Building Calculators
            </li>
          </ul>
          <div className="mt-[40px]">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
