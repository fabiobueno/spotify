import React from "react";

import Browse from "../pages/browse";
import Playlist from "../pages/playlist";

import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse}></Route>
    <Route path="/playlists/:id" component={Playlist}></Route>
  </Switch>
);

export default Routes;
