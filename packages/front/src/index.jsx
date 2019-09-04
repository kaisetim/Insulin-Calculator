import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "reaect-router-dom";

import { matchRoutes, renderRoutes } from "react-router-config";

import { App } from "./component/app";

import "./generalStyle.scss";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    container
  );
});
