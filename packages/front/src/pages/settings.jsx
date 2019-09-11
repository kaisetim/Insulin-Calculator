import React from "react";

import { InputField } from "../component/inputField/inputField";
import { MenuBar } from "../component/menuBar/menuBar";

export const Settings = () => {
  return (
    <>
      <InputField
        usedClass="inputContainerSettings"
        type="number"
        text1="Carbonates per Unit"
      />
      <InputField
        usedClass="inputContainerSettings"
        type="number"
        text1="Glucose per Unit"
      />
      <InputField usedClass="submitBtn" type="submit" value="Save" />
      <MenuBar />
    </>
  );
};
