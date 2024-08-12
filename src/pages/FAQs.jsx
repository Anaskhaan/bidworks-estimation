import React from "react";
import { useEffect } from "react";

const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Frequently Asked Questions (FAQs)
      </h2>
      <ol className="list-decimal list-inside space-y-4 text-gray-700">
        <li>
          <strong>Why are accurate construction estimates important?</strong>
          <p className="mt-1 sm:mt-2">
            Accurate construction estimates are crucial for setting a realistic
            budget, securing financing, and making informed decisions throughout
            the project. They help avoid unexpected expenses, ensure that the
            project stays within budget, and assist in the efficient allocation
            of resources.
          </p>
        </li>
        <li>
          <strong>
            How does BidWorks Estimating ensure accuracy in its estimates?
          </strong>
          <p className="mt-1 sm:mt-2">
            At BidWorks Estimating, we ensure accuracy by using advanced
            software tools, detailed analysis, and experienced estimators. We
            carefully review project documents, perform thorough quantity
            takeoffs, and apply industry-standard practices to provide precise
            and reliable cost estimates.
          </p>
        </li>
        <li>
          <strong>
            What types of projects do you provide estimating services for?
          </strong>
          <p className="mt-1 sm:mt-2">
            We offer estimating services for a wide range of projects, including
            residential, commercial, industrial, and civil construction. Our
            portfolio includes renovations, additions, mixed-use buildings,
            airports, highways, marine projects, and public sector projects.
          </p>
        </li>
        <li>
          <strong>How do your takeoff services benefit subcontractors?</strong>
          <p className="mt-1 sm:mt-2">
            Our takeoff services benefit subcontractors by providing detailed
            and accurate quantities of materials and labor needed for specific
            trades. This helps in preparing competitive bids, managing project
            costs, and ensuring that subcontractors can submit precise and
            reliable proposals.
          </p>
        </li>
        <li>
          <strong>Can you handle large-scale public sector projects?</strong>
          <p className="mt-1 sm:mt-2">
            Yes, we have extensive experience with large-scale public sector
            projects across the USA. Our clients include major public
            organizations such as the Texas Department of Transportation
            (TxDOT), the Metropolitan Transportation Authority (MTA), and the
            Environmental Protection Agency (EPA), among others.
          </p>
        </li>
        <li>
          <strong>How do I get a quote for your estimating services?</strong>
          <p className="mt-1 sm:mt-2">
            To receive a quote for our estimating services, please contact us
            directly via our website or by phone. Provide us with details about
            your project, including plans, specifications, and any other
            relevant documents. Our team will review your information and
            provide you with a customized quote.
          </p>
        </li>
        <li>
          <strong>What areas in the USA do you serve?</strong>
          <p className="mt-1 sm:mt-2">
            BidWorks Estimating serves clients across the entire USA. Whether
            your project is in Texas, New York, Florida, or any other state, we
            have the expertise and resources to provide accurate estimating and
            takeoff services tailored to your needs.
          </p>
        </li>
        <li>
          <strong>How can I get in touch with BidWorks Estimating?</strong>
          <p className="mt-1 sm:mt-2">
            You can reach us by filling out the contact form on our website,
            calling us directly, or emailing us. We will be happy to discuss
            your project requirements, provide additional information, and
            assist you with your estimating needs.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default FAQs;
