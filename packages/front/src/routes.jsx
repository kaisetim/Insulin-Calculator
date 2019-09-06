import { Main } from "./component/main/main";
import { Settings } from "./component/settings/settings";
import { App } from "./component/app";

export const routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        component: Main
      },
      {
        path: "/settings",
        component: Settings
      }
    ]
  }
];
