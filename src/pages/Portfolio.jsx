import React from "react";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Portfolio</h2>

      <p className="mb-4 text-gray-700">
        BidWorks Estimating is a premier provider of construction estimating
        services with over 15 years of industry expertise. Specializing in
        accurate and comprehensive construction cost estimation, we support both
        public and private sector projects across residential, commercial,
        industrial, and civil sectors. Our skilled team of quantity surveyors
        and engineers collaborates closely with clients to deliver precise
        estimates and manage budgets, ensuring seamless project execution and
        avoiding unexpected costs.
      </p>

      <p className="mb-4 text-gray-700">
        Our commitment to accuracy and affordability has garnered a diverse
        clientele across North America, Africa, the Caribbean, and Australia.
        From preliminary feasibility studies and design phase estimates to
        detailed bid preparations, our tailored estimating services cover every
        phase of project planning and execution. With a dedicated in-house team,
        we ensure high-quality service without straining our clients' finances.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-3">
        Our Clients Include:
      </h3>
      <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
        <li>General Contractors</li>
        <li>Subcontractors</li>
        <li>Architects</li>
        <li>Designers</li>
        <li>Developers</li>
        <li>Investors</li>
        <li>Vendors</li>
        <li>Owners</li>
      </ul>

      <p className="mb-4 text-gray-700">
        We are known for our on-time delivery and precision.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-3">
        Our Diverse Portfolio Includes:
      </h3>
      <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
        <li>Renovations and Additions</li>
        <li>Mixed-Use Residential and Commercial Buildings</li>
        <li>Airports and Highways</li>
        <li>Marine and Industrial Projects</li>
        <li>Public Sector Projects</li>
      </ul>

      <p className="mb-4 text-gray-700">
        We have extensive experience with major public organizations in the USA.
      </p>

      <p className="mb-4 text-gray-700">
        BidWorks Estimating also provides specialized take-off services for
        small subcontractors needing bid estimates for specific trades.
        Utilizing advanced software and tools, our experts deliver precise
        estimates for all CSI divisions, including:
      </p>

      <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
        <li>Site-work, Earthwork, Masonry</li>
        <li>Concrete, Structural Steel</li>
        <li>Finishes, Drywall, Painting</li>
        <li>Tiling, Flooring, Roofing</li>
        <li>Doors/Windows, Lumber, Mill-work</li>
        <li>Cabinetry, Insulation, Fireproofing</li>
        <li>Damp-proofing, Stucco</li>
        <li>Mechanical, HVAC, Ductwork</li>
        <li>Electrical, Plumbing</li>
      </ul>

      <p className="mb-4 text-gray-700">
        For top-notch construction estimating services and detailed take-off
        services, reach out to BidWorks Estimating today. We ensure your
        projects are accurately estimated and effectively managed.
      </p>
    </div>
  );
};

export default Portfolio;
