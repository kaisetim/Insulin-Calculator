import React from "react";
import { Route } from "react-router-dom";

import { Calculator } from "./pages/calculator";
import { Settings } from "./pages/settings";
import { Info } from "./pages/info";

export const App = () => {
  return (
    <>
      <Route exact path="/" component={Settings} />
      <Route exact path="/calculator" component={Calculator} />
      <Route exact path="/info" component={Info} />
    </>
  );
};
