import React from "react";

import { BtnPrimary } from "../component/btnPrimary/btnPrimary";
import { InputField } from "../component/inputField/inputField";
import { MenuBar } from "../component/menuBar/menuBar";

export const Settings = () => {
  return (
    <>
      <InputField
        containerClass="inputContainerSettings"
        inputClass="inputSettings"
        type="number"
        placeholder="Type in here ..."
        text1="Carbonates per Unit"
      />
      <InputField
        containerClass="inputContainerSettings"
        inputClass="inputSettings"
        type="number"
        placeholder="Type in here ..."
        text1="Glucose per Unit"
      />
      <BtnPrimary
        containerClass="submitBtnPrimaryContainer"
        btnClass="submitBtnPrimary"
        type="submit"
        value="Save"
      />
      {/* <InputField
        containerClass="submitBtn"
        inputClass="inputSettingsBtn"
        type="submit"
        value="Save"
      /> */}
      <MenuBar />
    </>
  );
};
