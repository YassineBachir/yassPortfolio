import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Nav />
    </>
  );
};

export default Layout;
