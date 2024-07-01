import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Headertopbar from "../components/Headertopbar";

function Layout() {
  return (
    <div>
      <Headertopbar></Headertopbar>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
