import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <NavLink to="/">Homepage</NavLink>
    <NavLink to="/dashboard">Dashboard</NavLink>
  </div>
);

export default Header;
