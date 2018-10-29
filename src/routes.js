import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  CartPage,
  Checkout,
  Contact,
  ErrorPage,
  Layout
} from "./components";

import * as routes from "./constants/route-paths";

class Router extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={routes.home} component={CartPage} />
            <Route path={routes.checkout} component={Checkout} />
            <Route path={routes.payment} component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Router;
