import React from "react";

const InfoSection = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">
        Construction Estimating Services
      </h1>
      <h2 className="text-xl font-semibold text-center mb-8">
        What you enjoy when you work with us
      </h2>

      <div className="mb-6">
        <p className="text-lg font-bold mb-2">
          Our services are 100% reliable 24/7
        </p>
        <p>
          You can reach us anytime/any day for highly reliable estimation and
          take off information. What other companies lack in professionalism and
          accuracy, we make available to you immediately.
        </p>
      </div>

      <div className="mb-6">
        <p className="text-lg font-bold mb-2">State-of-the-art technology</p>
        <p>
          We utilize superior technologies – from software to hardware – to
          ensure everything you receive from us is unique. Every information we
          provide is made available from thorough research and careful planning
          processes. The result is a long-standing construction.
        </p>
      </div>

      <div>
        <p className="text-lg font-bold mb-2">
          Our company is built on transparency
        </p>
        <p>
          Every detailed analysis of your construction will be obtained from
          transparent processes that are open to the eye. You get to understand
          why and how an amount of material is needed and why another is not. It
          provides a clearer picture of how your construction will emerge.
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
