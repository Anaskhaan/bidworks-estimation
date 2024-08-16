import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // Get the current path
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage the dropdown visibility

  // Function to check if the current path matches the given path
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-[#022140] text-white z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/">
          <img
            src="assets/logo.svg"
            alt="header logo"
            className="w-6 ml-16 "
          ></img>
        </Link>

        {/* Hamburger Menu Button for Mobile - Only visible on small screens */}
        <div className="md:hidden relative z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu
            className="text-white focus:outline-none"
          >
            <img
              src="/assets/hamburger.svg" // Path to hamburger icon
              alt="Hamburger Menu"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-40">
            {/* Close Button */}
            <div className="absolute top-0 right-0 mt-8 mr-8">
              <button
                onClick={() => setIsMenuOpen(false)} // Close mobile menu
                className="text-white text-3xl"
              >
                &times; {/* "×" character for close icon */}
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col items-center justify-center h-full">
              <Link
                to="/"
                className="text-white text-2xl mb-4"
                onClick={() => setIsMenuOpen(false)} // Close menu after click
              >
                HOME
              </Link>
              <Link
                to="/example"
                className="text-white text-2xl mb-4"
                onClick={() => setIsMenuOpen(false)} // Close menu after click
              >
                SAMPLES
              </Link>
              <Link
                to="/upload"
                className="text-white text-2xl mb-4"
                onClick={() => setIsMenuOpen(false)} // Close menu after click
              >
                UPLOAD
              </Link>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown menu
                className="text-white text-2xl mb-4"
              >
                RESOURCES
              </button>

              {/* Dropdown Menu in Mobile View */}
              {isDropdownOpen && (
                <div className="bg-black text-white shadow-lg rounded-lg w-48">
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full text-left py-2 px-4 hover:text-gray-200">
                      ABOUT US
                    </button>
                  </Link>
                  <Link to="/faqs" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full text-left py-2 px-4 hover:text-gray-200">
                      FAQs
                    </button>
                  </Link>
                  <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>
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
            {/* Desktop View Menu Links */}
            <Link to="/" className="flex">
              <button
                className={`text-white font-bold py-2 px-4 border-b-4 rounded ${
                  isActive("/")
                    ? "border-customBlue bg-customBlue" // Active state styling
                    : "border-blue-700 hover:border-blue-500 hover:bg-blue-400" // Default state styling
                }`}
              >
                HOME
              </button>
            </Link>
            <Link to="/example" className="flex">
              <button
                className={`text-white font-bold py-2 px-4 border-b-4 rounded ${
                  isActive("/example")
                    ? "border-customBlue bg-customBlue" // Active state styling
                    : "border-blue-700 hover:border-blue-500 hover:bg-blue-400" // Default state styling
                }`}
              >
                SAMPLES
              </button>
            </Link>
            <Link to="/upload" className="flex">
              <button
                className={`text-white font-bold py-2 px-4 border-b-4 rounded ${
                  isActive("/upload")
                    ? "border-customBlue bg-customBlue" // Active state styling
                    : "border-blue-700 hover:border-blue-500 hover:bg-blue-400" // Default state styling
                }`}
              >
                UPLOAD
              </button>
            </Link>

            {/* Dropdown Menu Trigger in Desktop View */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
                className="text-white font-bold py-2 px-4 border-b-4 rounded border-blue-700 hover:border-blue-500 hover:bg-blue-400"
              >
                RESOURCES
              </button>

              {/* Dropdown Menu Content */}
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
