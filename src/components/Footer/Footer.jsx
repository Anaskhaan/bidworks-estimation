import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#022140] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* First Column */}
          <div className="mb-6 md:mb-0">
            <img
              className="w-48 md:w-64"
              src="assets/asset5.svg"
              alt="website logo"
            />
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-4 mb-6 md:mb-0">
            <h6 className="font-semibold text-lg">More Information</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/upload" className="hover:opacity-80">
                  Request A Quote
                </Link>
              </li>
              <li>
                <Link to="/example" className="hover:opacity-80">
                  Takeoff Examples
                </Link>
              </li>
              <li>
                <a href="/blogs" className="hover:opacity-80">
                  Blogs
                </a>
              </li>
            </ul>
            <h6 className="font-semibold text-lg mt-4">Contact Us</h6>
            <ul className="text-sm space-y-1">
              <li>571-384-4490</li>
              <li>info@bidworksestimating.com</li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="flex flex-col items-center md:items-start">
            <h6 className="font-semibold text-lg mb-2">
              Newsletter & Discounts
            </h6>
            <input
              className="mb-4 text-lg text-gray-700 py-2 px-3 rounded-sm w-full md:w-64 bg-white outline-none"
              type="email"
              placeholder="Your Email Address"
            />
            <h6 className="font-semibold text-lg mb-2">Stay Connected</h6>
            <h6 className="font-bold mt-4">Address</h6>
            <ul className="text-sm text-center md:text-left">
              <li>7443 FOXLEIGH WAY</li>
              <li>ALEXANDRIA, VA 22315</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
