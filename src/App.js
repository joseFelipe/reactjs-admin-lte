import React, { Component } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </>
    );
  }
}
