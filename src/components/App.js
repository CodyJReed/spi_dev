import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import Resources from "./Resources/Resources";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
        <div
          style={{
            height: "100%"
          }}
        >
          <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main
            style={{
              marginTop: "64px"
            }}
          >
            <Resources />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
