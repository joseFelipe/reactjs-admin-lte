import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/auth/Login";

export default class routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}
