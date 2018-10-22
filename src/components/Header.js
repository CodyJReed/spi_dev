import React from "react";

import Nav from "./Nav";

import spi from "../img/icn-spi.svg";
import logo from "../img/icn-logo.svg";

const Header = () => {
  return (
    <header className="nav-bar">
      <div>
        <img className="icn-spi" src={spi} alt="SPI" />
        <img className="icn-logo" src={logo} alt="spi logo" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
