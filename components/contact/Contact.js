import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container py-10 lg:px-14 ">
      <h1 className="text-4xl text-dark font-bold">Contact Us:</h1>

      <div className="flex lg:flex-row flex-col">
        <div className="pr-4">
          <div className="divider"></div>
          <div className="font-semibold text-lg">The Department of Applied Mathematics is located in 3rd Floor of Academic Building 2</div>
          <div className="font-bold text-lg">Mailing address:</div>
          <div>Department of Applied Mathematics</div>
          <div>Noakhali Science & Technology University</div>
          <div>Noakhali, 3814</div>
          <div>
            <span className="font-semibold">Telephone:</span> (206) 543-5493
          </div>
          <div>
            <span className="font-semibold">Email:</span> info@amath.edu
          </div>
        </div>
        <div className="px-4 lg:mt-4">
          <h1>You may also contact us by filling out the form</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
