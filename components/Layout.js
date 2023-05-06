import React from "react";
import Banner from "./Banner";

import Sidebar from "./Sidebar";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const Layout = ({children}) => {
  return (
    <>
      <Navbar />

      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
