import React from "react";
import { Route } from "react-router-dom";

import { Main } from "../pages/main";
import { Settings } from "../pages/settings";

export const App = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/settings" component={Settings} />
    </>
  );
};
