import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Headertopbar from "../components/Header/Headertopbar";
import Footerbottombar from "../components/Footer/Footerbottombar";

function Layout() {
  return (
    <div>
      <div className="md:fixed md:left-0 md:right-0">
        <Headertopbar></Headertopbar>
        <Header></Header>
      </div>
      <div className="md:pt-[100px]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
      <Footerbottombar></Footerbottombar>
    </div>
  );
}

export default Layout;
