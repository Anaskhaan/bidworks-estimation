import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // Determine active path
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-[#022140] text-white z-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between responsive-box">
        {/* <img src="assets/asset5.svg" alt="website logo" className="w-12 h-12" /> */}
        <h1 className="font-bold text-lg">
          <a href="https://www.bidworksestimation.com">BidWorks Estimation</a>
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          <Link to="/">
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
          <Link to="/example">
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
          <Link to="/upload">
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
        </div>
      </div>
    </div>
  );
}

export default Header;
