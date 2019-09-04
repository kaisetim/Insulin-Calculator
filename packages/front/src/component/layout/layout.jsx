import { Main } from "../main/main";
import { Settings } from "../settings/settings";
import { Layout } from "./layout";

const routes = {
  component: Layout,
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
