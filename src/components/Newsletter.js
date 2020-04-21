import React from "react";

const Newsletter = () => (
  <div className="text-center newsletter">
    <div className="newsletter__title">
      <h2>Sign up for our Newsletter</h2>
    </div>
    <div className="newsletter__content">
      <input className="signup" type="email" placeholder="Enter your Email" />
      <button className="button signupbutton">Sign up</button>
    </div>
  </div>
);

export default Newsletter;
