import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-screen-lg md:w-4/5 lg:w-3/5 bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-blueTwo mb-6">
          About Us
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Welcome to BidWorks Estimating – Excellence in Construction Estimating
          and Takeoff Services
        </h2>
        <p className="text-gray-700 mb-4">
          At BidWorks Estimating, we are passionate about providing unparalleled
          construction estimating and takeoff services that empower your
          projects to succeed. With over 15 years of industry experience, we
          combine precision, expertise, and cutting-edge technology to deliver
          accurate cost estimates and comprehensive takeoff solutions tailored
          to your unique needs.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 mb-4">
          BidWorks Estimating is a dedicated team of seasoned professionals
          specializing in construction cost estimation. Our experts include
          highly skilled quantity surveyors and estimators who are committed to
          supporting clients through every phase of their construction projects,
          from initial planning to project completion.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Our Services
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li className="mb-2">
            <strong>Construction Estimating Services:</strong> We provide
            detailed and reliable estimates for a wide range of construction
            projects. Whether you’re working on a residential home, a commercial
            building, an industrial facility, or a civil infrastructure project,
            our estimates help you budget effectively and make informed
            decisions.
          </li>
          <li className="mb-2">
            <strong>Takeoff Services:</strong> Our precise takeoff services
            involve calculating the quantities of materials and labor required
            based on your project’s blueprints and specifications. This crucial
            step ensures accurate bidding and helps you avoid unexpected costs
            during construction.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-decimal list-inside text-gray-700 mb-4">
          <li className="mb-2">
            <strong>Unmatched Accuracy:</strong> We use state-of-the-art
            software and proven methodologies to deliver precise estimates and
            takeoffs. Our commitment to detail ensures that your project’s
            financial planning is as accurate as possible.
          </li>
          <li className="mb-2">
            <strong>Industry Expertise:</strong> With extensive experience
            across various sectors, we understand the complexities of different
            types of construction projects. Our team’s deep industry knowledge
            allows us to provide insightful and practical estimating solutions.
          </li>
          <li className="mb-2">
            <strong>Tailored Solutions:</strong> We recognize that every project
            is unique. Our services are customized to fit the specific
            requirements of your project, ensuring that our estimates align with
            your goals and constraints.
          </li>
          <li className="mb-2">
            <strong>Nationwide Reach:</strong> Serving clients throughout the
            USA, including major public sector agencies such as the Texas
            Department of Transportation (TxDOT) and the Metropolitan
            Transportation Authority (MTA), we are equipped to handle projects
            of any size and scope.
          </li>
          <li className="mb-2">
            <strong>Client-Focused Approach:</strong> At BidWorks Estimating,
            client satisfaction is our top priority. We strive to deliver not
            only accurate estimates but also exceptional service. Our goal is to
            support your project’s success with timely, clear, and
            cost-effective solutions.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-4">
          Our mission is to provide reliable, precise, and comprehensive
          estimating services that enhance the efficiency and success of your
          construction projects. We are dedicated to helping you achieve your
          goals with confidence, knowing that your budget and project scope are
          under control.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-4">
          Discover how BidWorks Estimating can elevate your construction
          projects with expert estimating and takeoff services. Contact us today
          to discuss your needs and get a personalized estimate.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Contact Information
        </h2>
        <ul className="text-gray-700">
          <li className="mb-2">
            <strong>Phone:</strong>{" "}
            <a
              href="https://wa.me/15713844490"
              className="text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              571-384-4490
            </a>
          </li>
          <li className="mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@bidworksestimating.com"
              className="text-blue-800 "
            >
              info@bidworksestimating.com
            </a>
          </li>
          <li className="mb-2">
            <strong>Website:</strong>{" "}
            <Link to="/" className="text-blue-800 ">
              https://www.bidworksestimating.com
            </Link>
          </li>
          <li className="mb-2">
            <strong>Address:</strong>{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=7443+FOXLEIGH+WAY+ALEXANDRIA,+VA+22315"
              className="text-blue-800 "
              target="_blank"
              rel="noopener noreferrer"
            >
              7443 FOXLEIGH WAY, ALEXANDRIA, VA 22315
            </a>
          </li>
        </ul>

        <p className="text-gray-700 mt-6">
          Experience the difference with BidWorks Estimating – where accuracy
          meets excellence in construction cost management.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
