import React from "react";
// import jobImage from "./path/to/your/image.png";

const NeedMoreJobs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-[50px]">
      <div className="md:w-[50%]">
        <img
          src="assets/jobapproval.webp"
          alt="Construction tools and plans"
          className="min-h-[450px] object-cover"
        />
      </div>
      <div className="md:w-[50%] bg-[#265077] text-white min-h-[450px] flex flex-col justify-center px-[30px]">
        <h2 className="text-3xl font-bold mb-4">
          Require Additional Job Approvals?
        </h2>
        <p className="mb-4 text-[#fffafa]">
          The more you bid, the higher chances of getting new project approvals.
          Our clients have been able to win more bids with our help because we
          provide accurate and efficient construction takeoff services. We hope
          to be an invaluable new addition on your team!
        </p>
      </div>
    </div>
  );
};

export default NeedMoreJobs;
