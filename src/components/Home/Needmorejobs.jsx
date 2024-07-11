import React from "react";
// import jobImage from "./path/to/your/image.png";

const NeedMoreJobs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 max-w-[80%] mx-auto">
      <div className="w-full md:w-1/2 p-4">
        {/* <img
          src={jobImage}
          alt="Construction tools and plans"
          className="rounded-lg shadow-lg"
        /> */}
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Need More Job Approvals?</h2>
        <p className="mb-4">
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
