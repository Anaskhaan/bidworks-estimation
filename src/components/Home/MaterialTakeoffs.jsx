import React from "react";

const MaterialTakeoffs = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto text-center">
      <div className="pr-20 pt-5">
        <h1 className="text-5xl font-bold mb-4 p-2.5 pr-8">
          Material Takeoffs
        </h1>
      </div>
      <div className="pr-20">
        <h1 className="text-5xl font-bold mb-4 p-2.5 ">& Cost Estimations</h1>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-center items-center h-16 mb-4">
            <span className="inline-block text-4xl text-purple-600">
              <i className="fas fa-ruler-combined"></i>
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">Accuracy</h3>
          <p>Line item by line item detailed takeoffs</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-center items-center h-16 mb-4">
            <span className="inline-block text-4xl text-red-600">
              <i className="fas fa-file-alt"></i>
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">Estimating Services</h3>
          <p>Win more bids with our estimating service</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-center items-center h-16 mb-4">
            <span className="inline-block text-4xl text-yellow-600">
              <i className="fas fa-clock"></i>
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">Fast Turn Around Times</h3>
          <p>We understand the importance of due dates</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-center items-center h-16 mb-4">
            <span className="inline-block text-4xl text-green-600">
              <i className="fas fa-thumbs-up"></i>
            </span>
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
