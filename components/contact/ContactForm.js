import React from "react";

const ContactForm = () => {
  return (
    <div className="py-4">
      <div className="form-control mb-2">
        <label className="input-group">
          <span>Name</span>
          <input type="text" placeholder="name.." className="input input-bordered w-full" />
        </label>
      </div>
      <div className="form-control mb-2">
        <label className="input-group">
          <span>Email</span>
          <input type="email" placeholder="info@site.com" className="input input-bordered  w-full" />
        </label>
      </div>
      <div className="form-control mb-2">
        <label className="input-group">
          <span>Subject</span>
          <input type="text" placeholder="name.." className="input input-bordered  w-full" />
        </label>
      </div>

      <textarea placeholder="Message" className="textarea textarea-bordered textarea-md w-full "></textarea>
    </div>
  );
};

export default ContactForm;
