import React from "react";

import { routes } from "../routes";

export const App = () => {
  return (
    <Router>
      {routes.routes.map(route => {
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
        />;
      })}
    </Router>
  );
};
