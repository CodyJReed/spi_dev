import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../css/App.css";

import Header from "./Header";
import Resources from "./Resources";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" component={Resources} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
