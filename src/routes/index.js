import React from "react";

import Browse from "../pages/browse";

import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse}></Route>
  </Switch>
);

export default Routes;
