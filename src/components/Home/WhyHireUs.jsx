import React from "react";

const WhyHireUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-5xl mx-auto font-sans text-gray-800">
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-[#022140] mb-4">
          Why Hire Us?
        </h2>
        <p className="text-justify mb-4">
          Hire us to do your tedious takeoff work. You will have more time and
          save more money when you use our services. Focus on what’s really
          important and leave this part to us. Our team of project managers and
          engineers are ready to serve you!
        </p>
        <ul className="list-none pl-0 space-y-3">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>USA Based
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>Affordable
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>No Contracts & No Set
            Up Fees
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>We Never Charge For
            Quotes
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>We Are Built On
            Transparency
          </li>
        </ul>
      </div>

      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          src="assets/hire.webp"
          alt="Why Hire Us"
          className="w-full h-auto min-h-[200px] lg:min-h-[300px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default WhyHireUs;
