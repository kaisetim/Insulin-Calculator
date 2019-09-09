import React from "react";
import { renderRoutes } from "react-router-config";

import { routes } from "../routes";

export const App = () => {
  return (
    <Router>
      {routes.routes.map(route => {
        renderRoutes(
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Router>
  );
};
