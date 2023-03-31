import React from "react";

const Navbar = ({ totalcounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a
        className="navbar-brand"
        href="https://github.com">
        Navbar
      </a>
      <span className="badge bg-primary">{totalcounters}</span>
    </nav>
  );
};

export default Navbar;
