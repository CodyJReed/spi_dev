import React from "react";

import "./SideDrawer.css";

const SideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer open"];
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Solutions</a>
        </li>
        <li>
          <a href="/">Industries</a>
        </li>
        <li>
          <a href="/">SPI University</a>
        </li>
        <li>
          <a href="/">Company</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
