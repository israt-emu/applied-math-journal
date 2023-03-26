import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <Banner />

      <main className="flex items-start">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
