import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Headertopbar from "../components/Header/Headertopbar";
import Footerbottombar from "../components/Footer/Footerbottombar";

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
