import React from "react";

function Header() {
  return (
    <div className="bg-[#022140] text-white items-center fixed left-0 right-0 z-10">
      <div className="mx-[10px] py-[20px] flex items-center justify-between responsive-box ">
        <img src="" alt="website logo" />
        <div className="flex items-center gap-2">
          <h6 className="hover:opacity-70 cursor-pointer">Home</h6>
          <h6 className="hover:opacity-70 cursor-pointer">Example</h6>
        </div>
      </div>
    </div>
  );
}

export default Header;
