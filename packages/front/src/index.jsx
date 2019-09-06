import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

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
