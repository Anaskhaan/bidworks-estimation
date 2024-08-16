import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Headertopbar from "../components/Header/Headertopbar";
import Footerbottombar from "../components/Footer/Footerbottombar";

function Layout() {
  return (
    <div>
      <div className="fixed left-0 right-0 z-10">
        <Headertopbar></Headertopbar>
        <Header></Header>
      </div>
      <div className="md:pt-[94px] " style={{ paddingTop: "80px" }}>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
      <Footerbottombar></Footerbottombar>
    </div>
  );
}

export default Layout;
