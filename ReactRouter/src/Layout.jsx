import React from "react";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
