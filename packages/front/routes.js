import { matchRoutes, renderRoutes } from "react-router-config";

import { Main } from "./main/main";
import { Settings } from "./settings/settings";

const routes = {
  component: routes.main,
  routes: [
    {
      path: "/",
      exact: true,
      component: Main
    },
    {
      path: "/settings",
      component: Settings
    }
  ]
};
