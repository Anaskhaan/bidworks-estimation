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
        <h2 className="text-3xl font-bold mb-4">Need More Job Approvals?</h2>
        <p className="mb-4 text-[#fffafa]">
          The more bids you submit the more opportunities you will have for new
          job approvals. We provide professional and fast construction takeoff
          services. Many of our customers are happy to see that we have helped
          them win more bids. We look forward to being part of your team!
        </p>
      </div>
    </div>
  );
};

export default NeedMoreJobs;
