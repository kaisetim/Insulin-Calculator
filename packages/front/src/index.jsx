import React from "react";
import ReactDOM from "react-dom";

import { Calculator } from "./component/calculate/calculate";
import { MenuBar } from "./component/menuBar/menuBar";

document.addEventListener("DOMContentLoaded", () => {
  const calcContainer = document.getElementById("calcContainer");
  const menuContainer = document.getElementById("menuContainer");

  ReactDOM.render(<Calculator />, calcContainer);
  ReactDOM.render(<MenuBar />, menuContainer);
});
