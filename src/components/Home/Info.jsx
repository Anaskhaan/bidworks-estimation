import React, { useState } from "react";

const ConstructionEstimatingServices = () => {
  const [currentItem, setItem] = useState("Reliabilty");
  // let currentItem = "Reliablity";
  const changeTab = (tab) => {
    setItem(tab);
  };
  return (
    <div className="md:px-4 py-8 md:max-w-[80%] mx-auto font-sans leading-relaxed sm:px-6 lg:px-8">
      <div className="flex gap-2 info-btn-wrapper justify-center items-center px-[5px] overflow-hidden">
        <div
          onClick={() => {
            changeTab("Reliabilty");
          }}
          className={`info-res info-buttons  ${
            currentItem === "Reliabilty" ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          <img
            className="icon-res info-btn-icon"
            src="assets/reliable.svg"
            alt="svg"
          />
        </div>
        <div
          onClick={() => {
            changeTab("Technology");
          }}
          className={`info-res info-buttons ${
            currentItem === "Technology" ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          <img
            className="icon-res info-btn-icon"
            src="assets/technology.svg"
            alt="svg"
          />
        </div>
        <div
          onClick={() => {
            changeTab("Transparency");
          }}
          className={`info-res info-buttons ${
            currentItem === "Transparency" ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          <img
            className="icon-res info-btn-icon"
            src="assets/transparency.svg"
            alt="svg"
          />
        </div>
      </div>
      {/*  */}
      <div className="space-y-8">
        {currentItem === "Reliabilty" ? (
          <div className="flex flex-col justify-center items-center my-[40px] px-[10px] text-center">
            <h1 className="font-bold text-[#022140] text-xl mb-[10px] text-center mx-auto">
              Our services are 100% reliable 24/7
            </h1>
            <hr className="w-[10%] border-[2px] border-[#265077] mb-[10px]" />
            <p className="text-[14px] text-gray-600 text-center text-balance text-lg">
              You can reach us anytime/any day for highly reliable estimation
              and take off information. What other companies lack in
              professionalism and accuracy, we make available to you
              immediately.
            </p>
          </div>
        ) : currentItem === "Technology" ? (
          <div className="flex flex-col justify-center items-center my-[40px] px-[10px] text-center ">
            <h1 className="font-bold text-[#022140] text-xl mb-[10px] text-center mx-auto">
              State-of-the-art technology
            </h1>
            <hr className="w-[10%] border-[2px] border-[#265077] mb-[10px]" />
            <p className="text-[14px] text-gray-600 text-center text-balance text-lg">
              We utilize superior technologies – from software to hardware – to
              ensure everything you receive from us is unique. Every information
              we provide is made available from thorough research and careful
              planning processes. The result is a long-standing construction.
            </p>
          </div>
        ) : currentItem === "Transparency" ? (
          <div className="flex flex-col justify-center items-center my-[40px] px-[10px] text-center">
            <h1 className="font-bold text-[#022140] text-xl mb-[10px] text-center mx-auto">
              Our company is built on transparency
            </h1>
            <hr className="w-[10%] border-[2px] border-[#265077] mb-[10px] " />
            <p className="text-[14px] text-gray-600 text-center text-balance text-lg">
              Every detailed analysis of your construction will be obtained from
              transparent processes that are open to the eye. You get to
              understand why and how an amount of material is needed and why
              another is not. It provides a clearer picture of how your
              construction will emerge.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ConstructionEstimatingServices;
