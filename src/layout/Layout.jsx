import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Headertopbar from "../components/Headertopbar";
import Footerbottombar from "../components/Footerbottombar";

function Layout() {
  return (
    <div>
      <Headertopbar></Headertopbar>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Footerbottombar></Footerbottombar>
    </div>
  );
}

export default Layout;
