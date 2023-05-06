import React from "react";
import Contact from "../components/contact/Contact";
import Banner from "../components/Banner";

const contact = () => {
  return (
    <div>
      <Banner imageClass="banner-contact" text="Contact Us" />
      <Contact />
    </div>
  );
};

export default contact;
