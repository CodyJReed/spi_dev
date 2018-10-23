import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./NavBar.css";

import spi from "../../img/icn-spi.svg";
import logo from "../../img/icn-logo.svg";

const NavBar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div className="navbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar__logo">
        <a href="/spi_dev">
          <img className="spi__icon" src={spi} alt="spi" />
          <img
            className="spi__brand"
            src={logo}
            alt="sales performance international"
          />
        </a>
      </div>
      <div className="spacer" />
      <div className="navbar_navigation-items">
        <ul>
          <li>
            <a href="/spi_dev">Solutions</a>
          </li>
          <li>
            <a href="/spi_dev">Industries</a>
          </li>
          <li>
            <a href="/spi_dev">SPI University</a>
          </li>
          <li>
            <a href="/spi_dev">Company</a>
          </li>
          <li>
            <a href="/spi_dev">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
