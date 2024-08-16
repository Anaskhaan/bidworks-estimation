import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Determine active path
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-[#022140] text-white z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
        <h1 className="font-bold text-lg">
          <Link to="/" className="uppercase">
            BidWorks Estimating
          </Link>
        </h1>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden relative z-60">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <img
              src="/assets/hamburger.svg" // Ensure path is correct
              alt="Hamburger Menu"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
            <div className="absolute top-0 right-0 mt-8 mr-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-3xl"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <Link to="/" className="text-white text-2xl mb-4">
                HOME
              </Link>
              <Link to="/example" className="text-white text-2xl mb-4">
                SAMPLES
              </Link>
              <Link to="/upload" className="text-white text-2xl mb-4">
                UPLOAD
              </Link>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white text-2xl mb-4"
              >
                RESOURCES
              </button>
              {isDropdownOpen && (
                <div className="bg-black text-white shadow-lg rounded-lg w-48">
                  <Link to="/about">
                    <button className="w-full text-left py-2 px-4 hover:text-gray-200">
                      ABOUT US
                    </button>
                  </Link>
                  <Link to="/faqs">
                    <button className="w-full text-left py-2 px-4 hover:text-gray-200">
                      FAQs
                    </button>
                  </Link>
                  <Link to="/portfolio">
                    <button className="w-full text-left py-2 px-4 hover:text-gray-200">
                      PORTFOLIO
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Menu Items - Hidden on Mobile */}
        {!isMenuOpen && (
          <div className="hidden md:flex flex-col md:flex-row items-center gap-2">
            <Link to="/" className="flex">
              <button
                className={`text-white font-bold py-2 px-4 border-b-4 rounded ${
                  isActive("/")
                    ? "border-customBlue bg-customBlue"
                    : "border-blue-700 hover:border-blue-500 hover:bg-blue-400"
                }`}
              >
                HOME
              </button>
            </Link>
            <Link to="/example" className="flex">
              <button
                className={`text-white font-bold py-2 px-4 border-b-4 rounded ${
                  isActive("/example")
                    ? "border-customBlue bg-customBlue"
                    : "border-blue-700 hover:border-blue-500 hover:bg-blue-400"
                }`}
              >
                SAMPLES
              </button>
            </Link>
            <Link to="/upload" className="flex">
              <button
                className={`text-white font-bold py-2 px-4 border-b-4 rounded ${
                  isActive("/upload")
                    ? "border-customBlue bg-customBlue"
                    : "border-blue-700 hover:border-blue-500 hover:bg-blue-400"
                }`}
              >
                UPLOAD
              </button>
            </Link>
            {/* Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white font-bold py-2 px-4 border-b-4 rounded border-blue-700 hover:border-blue-500 hover:bg-blue-400"
              >
                RESOURCES
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-black text-white shadow-lg rounded-lg w-48">
                  <Link to="/about">
                    <button className="w-full text-left py-2 px-4 hover:text-gray-200">
                      ABOUT US
                    </button>
                  </Link>
                  <Link to="/faqs">
                    <button className="w-full text-left py-2 px-4 hover:text-gray-200">
                      FAQs
                    </button>
                  </Link>
                  <Link to="/portfolio">
                    <button className="w-full text-left py-2 px-4 hover:text-gray-200">
                      PORTFOLIO
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
