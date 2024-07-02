import React from "react";

function Header() {
  return (
    <div className="bg-[#022140] text-white items-center">
      <div className="mx-[10px] py-[20px] flex items-center justify-between responsive-box ">
        <img src="" alt="website logo" />
        <div className="flex items-center gap-2">
          <h6 className="hover:scale-[1.25] cursor-pointer">Home</h6>
          <h6 className="hover:scale-[1.25] cursor-pointer">Example</h6>
        </div>
      </div>
    </div>
  );
}

export default Header;