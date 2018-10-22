import React from "react";
import logo from "../img/icn-spi.svg";

const Splash = () => {
  return (
    <div className="App-header">
      <img
        src={logo}
        style={{
          height: "25vmin"
        }}
        alt="logo"
      />
      <p className="">Loading ...</p>
    </div>
  );
};

export default Splash;
