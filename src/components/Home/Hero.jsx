import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen "
      style={{
        backgroundImage: "url('assets/hero.svg')",
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-opacity-90 ">
          <strong className=""> Construction Takeoffs &</strong>
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-opacity-90">
          <strong> Estimating Services</strong>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">
          <strong className="font-bold">
            Submit More Bids to Win More Jobs
          </strong>
        </p>
        <button
          className="tracking-widest px-6 py-3  text-white font-semibold  shadow-md transition duration-300 ease hover:tracking-wide"
          style={{
            backgroundImage: "linear-gradient(90deg, #000000 0%, #494b68 100%)",
            backgroundColor: "#265077", // Fallback color
          }}
        >
          FREE QUOTE REQUEST
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
