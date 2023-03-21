import React from "react";
import { NavLink } from "react-router-dom";

const NavbarApp = () => {
  return (
    <div className="container-nav">
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navlink" : "navlink-default"
          }
          to="/"
        >
          Home
        </NavLink>
      </div>
      <div>
        <span>|</span>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navlink" : "navlink-default"
          }
          to="/about"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarApp;
