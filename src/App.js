import React, { Component } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <Footer />
      </>
    );
  }
}
