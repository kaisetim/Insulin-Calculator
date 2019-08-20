import React from "react";
import ReactDOM from "react-dom";

import { App } from "./component/app/app";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  ReactDOM.render(<App />, container);
});
