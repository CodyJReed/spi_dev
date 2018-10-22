import React from "react";

const Nav = () => {
  return (
    <nav>
      <input type="checkbox" id="nav" name="nav" />
      <label htmlFor="nav">
        <span className="hamburger" />
      </label>
      <ul className="nav-toggle">
        <li>Solutions</li>
        <li>Industries</li>
        <li>SPI University</li>
        <li>Company</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Nav;
