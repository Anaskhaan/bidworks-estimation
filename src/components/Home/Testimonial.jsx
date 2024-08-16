import React from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "Send Us Your Plans",
    description:
      "Upload your plans here or email them to info@bidworksestimating.com—whichever is more convenient for you. Be sure to include details about your project and scope of work.",
  },
  {
    title: "Receive a Quote for Our Services",
    description:
      "We’ll provide you with a detailed quote for our services before we begin. Since every project is unique, we carefully review each situation, considering factors such as project scope, complexity, trades involved, and more.",
  },
  {
    title: "Receive Your Cost Estimate",
    description:
      "Our team will perform the takeoff and estimate for your project. You’ll receive both a PDF and an Excel file of your estimate. Additionally, we can offer construction lead generation services for the projects you wish to pursue further.",
  },
];

const GettingStartedGrid = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-[80%] p-4">
        <h1 className="text-3xl text-[#022140] font-bold mb-8 text-center">
          How to Get Started with BidWorks Estimating
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              className="bg-white border rounded-lg p-6 text-center shadow-lg"
              key={index}
            >
              <h3 className="font-bold text-2xl text-[#022140] mb-2">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 ">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className=" text-white py-3 px-6 font-semibold transition duration-300 ease-in-out hover:tracking-wide shadow-md button-hover-arrow"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #000000 0%, #494b68 100%)",
              backgroundColor: "#265077", // Fallback color
            }}
          >
            <Link to="/upload">UPLOAD</Link>
          </button>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl text-[#022140] font-semibold mb-4">
            More About BidWorks Estimating
          </h2>
          <p className="mb-6 text-[#022140]">
            <strong>BidWorks Estimating</strong>
            <br />
            At BidWorks Estimating, our team of skilled Project Managers and
            Estimators understands the challenges of managing a business while
            also handling bids. We recognize that balancing these
            responsibilities can sometimes feel nearly impossible.
            <br />
            <br />
            To address this, we’ve developed a comprehensive estimating solution
            that leverages Digital Takeoff and Estimating Software, allowing us
            to quickly and accurately estimate project costs.
            <br />
            <br />
            As one of the few construction estimating companies that is also a
            licensed General Contractor, we handle our own estimating for our
            projects.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-[#022140]">
            Benefits of Outsourcing Estimating
          </h3>
          <p className="mb-6 text-gray-600">
            Running a construction business presents numerous challenges. With
            our experience as a licensed General Contractor, we are
            well-acquainted with these struggles.
            <br />
            <br />
            <strong className="text-[#022140]">
              Why Outsource Estimating?
            </strong>
            <br />
            Are you missing out on projects due to a lack of time for
            construction takeoffs and finalizing estimates?
            <br />
            Many of our clients find themselves working late to prepare bids and
            create precise estimates to secure jobs. It’s nearly impossible to
            focus on ongoing projects during the day with the constant
            distractions on the job site.
            <br />
            <br />
            At BidWorks Estimating, we specialize in partnering with Contractors
            and Developers. Our experienced estimators will perform digital
            takeoffs and prepare your entire bid, allowing you to review it in
            just 15-20 minutes.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-[#022140]">
            Highly Accurate Construction Cost Database
          </h3>
          <p className="mb-6 text-gray-600">
            We utilize a highly accurate construction cost database that
            provides up-to-date labor and material pricing based on your
            project's zip code. This ensures that your estimates are as precise
            and competitive as possible.
            <br />
            <br />
            We work with:
            <br />
            • General Contractors
            <br />
            • Subcontractors
            <br />
            • Developers
            <br />
            • Architects
            <br />
            • Lenders
            <br />
            • Interior Designers
            <br />• And more!
          </p>
          <h3 className="text-xl font-semibold mb-4 text-[#022140]">
            Why Outsource Estimating to BidWorks Estimating
          </h3>
          <p className="mb-6 text-gray-600">
            At BidWorks Estimating, we offer a thorough two-part verification
            system to guarantee accuracy.
            <br />
            <br />
            First, our estimating team conducts a detailed quantity takeoff,
            estimates the costs, and prepares the initial spreadsheet.
            <br />
            Next, our reviewing team meticulously double-checks and makes any
            necessary final adjustments. Both our Estimating and Reviewing teams
            consist of seasoned Project Managers and Estimators with extensive
            experience in construction, ensuring top-notch precision in every
            estimate.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-[#022140]">
            Our Construction Services Include:
          </h3>
          <p className="mb-6 text-gray-600">
            • Commercial Estimating
            <br />
            • Residential Estimating
            <br />
            • Industrial Estimating
            <br />
            • Conceptual Estimating
            <br />
            • Schematic Estimating
            <br />
            • Design Development Estimates
            <br />
            • Quantity Surveys
            <br />
            • Budget Preparation
            <br />
            • Full Cost Estimates
            <br />
            • ROM Estimating (Rough Order of Magnitude Estimating)
            <br />
            • Framing Estimates
            <br />
            • Construction Takeoffs
            <br />
            • Drywall Estimating
            <br />
            • Insulation Estimating
            <br />
            • Concrete Estimating
            <br />
            • General Construction Estimating
            <br />
            • Painting Estimating
            <br />
            • Flooring Estimating
            <br />
            • General Contractor Estimating
            <br />• Subcontractor Estimating
            <h3 className="text-xl font-semibold my-4 text-[#022140]">
              SOFTWARE'S WE USE
            </h3>
            <p className="mb-6 text-gray-600">
              At BidWorks Estimating, we utilize a range of advanced software
              solutions to provide top-notch construction cost estimation
              services. Our toolkit includes industry-leading programs such as
              <strong> ProEst</strong>, <strong>PlanSwift</strong>, and{" "}
              <strong>RSMeans</strong>, which offer comprehensive features for
              accurate cost analysis, detailed reporting, and real-time updates.
              By integrating <strong>Bluebeam Revu</strong> for precise takeoffs
              and <strong>CostX</strong> for efficient quantity surveying, we
              ensure our clients receive accurate, transparent, and competitive
              bids. Whether you're handling a small renovation or a major
              construction project, our selection of sophisticated software
              enhances productivity, minimizes errors, and supports smarter
              decision-making. Trust BidWorks Estimating to deliver exceptional
              accuracy and reliability with the latest technology in every
              estimate.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedGrid;
