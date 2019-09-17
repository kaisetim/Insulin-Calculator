import React from "react";

import { MenuBar } from "../component/menuBar/menuBar";
import { TextBox } from "../component/text-box/text-box";

export const Info = () => {
  return (
    <>
      <TextBox text="https://github.com/kaisetim/Insulin-Calculator" />
      <MenuBar />
    </>
  );
};
