import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="bg-[#022140] text-white items-center z-10">
      <div className="mx-[10px] py-[20px] flex items-center justify-between responsive-box ">
        <img
          src="assets/logowithbackground.png"
          alt="website logo"
          style={{ width: "80px", height: "80px" }}
        />
        <div className="flex items-center gap-2">
          <Link to={""}>
            <h6 className="hover:opacity-70 cursor-pointer">Home</h6>
          </Link>
          <Link to={"example"}>
            <h6 className="hover:opacity-70 cursor-pointer">Example</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
