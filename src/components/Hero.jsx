import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://your-image-url.com/image.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#265077] opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Construction Takeoffs & Estimating Services
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">
          Submit More Bids to Win More Jobs
        </p>
        <button className="px-6 py-3 bg-[#265077] hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md">
          FREE QUOTE REQUEST
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
