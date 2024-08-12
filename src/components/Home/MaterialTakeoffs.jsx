import React from "react";

const MaterialTakeoffs = () => {
  return (
    <div className="p-8 max-w-[80%] mx-auto text-center">
      <div className="py-8 text-[30px] font-semibold py">
        Material Takeoffs & Cost Estimations
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:!shadow-[0px_2px_20px_3px_#265077] rounded-lg p-6 cursor-pointer">
          <div className="flex justify-center items-center h-16 mb-4">
            <img
              className="h-[80px] w-[80px]"
              src="assets/material/accuracy.svg"
              alt="svg"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Accuracy</h3>
          <p>Line item detailed takeoffs</p>
        </div>

        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:!shadow-[0px_2px_20px_3px_#265077] cursor-pointer rounded-lg p-6">
          <div className="flex justify-center items-center h-16 mb-4">
            <img
              className="h-[80px] w-[80px] mt-3"
              src="assets/material/profit.svg"
              alt="svg"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Estimating Services</h3>
          <p>Win more bids with our estimating service</p>
        </div>

        <div className="bg-white  shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:!shadow-[0px_2px_20px_3px_#265077] cursor-pointer rounded-lg p-6">
          <div className="flex justify-center items-center h-16 mb-4">
            <img
              className="h-[60px] w-[60px]"
              src="assets/material/time.svg"
              alt="svg"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Fast Turn Around Times</h3>
          <p>We understand the importance of due dates</p>
        </div>

        <div className="bg-white  shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:!shadow-[0px_2px_20px_3px_#265077] cursor-pointer rounded-lg p-6">
          <div className="flex justify-center items-center h-16 mb-4">
            <img
              className="h-[60px] w-[60px]"
              src="assets/material/experience.svg"
              alt="svg"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Experience</h3>
          <p>We have over 40 years of collective construction experience</p>
        </div>
      </div>
      <div className="mt-8">
        <button
          className=" text-white py-3 px-6 font-semibold transition duration-300 ease-in-out hover:tracking-wide shadow-md button-hover-arrow"
          style={{
            backgroundImage: "linear-gradient(90deg, #000000 0%, #494b68 100%)",
            backgroundColor: "#265077", // Fallback color
          }}
        >
          GET A FREE QUOTE &amp; ENJOY 10% OFF YOUR FIRST ORDER
        </button>
      </div>
    </div>
  );
};

export default MaterialTakeoffs;
