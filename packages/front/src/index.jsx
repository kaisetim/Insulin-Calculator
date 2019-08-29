import React from "react";
import ReactDOM from "react-dom";

import "./generalStyle.scss";

import { Main } from "./component/main/main";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  ReactDOM.render(<Main />, container);
});
