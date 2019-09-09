import React from "react";
import { Route } from "react-router-dom";

import { Main } from "./main/main";
import { Settings } from "./settings/settings";

export const App = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/settings" component={Settings} />
    </>
  );
};
