import React from "react";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();

  // Determine active path
  const isActive = (path) => location.pathname === path;
  return (
    <div className="bg-[#022140] text-white items-center z-10">
      <div className="mx-[10px] py-[20px] flex items-center justify-between responsive-box ">
        <img
          src="assets/logowithbackground.png"
          alt="website logo"
          style={{ width: "50px", height: "50px" }}
        />
        <div className="flex items-center gap-2">
          <Link to="/">
            <button
              className={`bg-customBlue text-white font-bold py-2 px-4 border-b-4 rounded ${
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
              className={`bg-customBlue text-white font-bold py-2 px-4 border-b-4 rounded ${
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
              className={`bg-customBlue text-white font-bold py-2 px-4 border-b-4 rounded ${
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
