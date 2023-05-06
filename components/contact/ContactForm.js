import React from "react";

const ContactForm = () => {
  return (
    <div className="py-4">
      <div className="form-control mb-3">
        <label className="input-group">
          <span>Name</span>
          <input type="text" placeholder="name.." className="input input-bordered w-full focus:outline-none" />
        </label>
      </div>
      <div className="form-control mb-3">
        <label className="input-group">
          <span>Email</span>
          <input type="email" placeholder="info@site.com" className="input input-bordered  w-full focus:outline-none" />
        </label>
      </div>
      <div className="form-control mb-3 border-light">
        <label className="input-group">
          <span>Subject</span>
          <input type="text" placeholder="name.." className="input input-bordered  w-full focus:outline-none" />
        </label>
      </div>

      <textarea placeholder="Message" className="textarea textarea-bordered textarea-md w-full focus:outline-none "></textarea>
    </div>
  );
};

export default ContactForm;
