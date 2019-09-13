import React, { useState } from "react";

import { BtnPrimary } from "../component/btnPrimary/btnPrimary";
import { InputField } from "../component/inputField/inputField";
import { MenuBar } from "../component/menuBar/menuBar";

import { setKeys } from "../setKeys";

export const Settings = () => {
  const [carbsPU, setCarbsPU] = useState(
    window.localStorage.getItem("CarbsPU")
  );
  const [glucosePU, setGlucosePU] = useState(
    window.localStorage.getItem("GlucosePU")
  );

  return (
    <>
      <InputField
        containerClass="inputContainerSettings"
        onChange={event => setCarbsPU(event.target.value)}
        value={carbsPU}
        inputClass="inputSettings"
        inputID="inputCarbsPU"
        type="number"
        placeholder="Type in here ..."
        text1="Carbonates per Unit"
        required="required"
      />
      <InputField
        containerClass="inputContainerSettings"
        value={glucosePU}
        onChange={event => setGlucosePU(event.target.value)}
        inputClass="inputSettings"
        inputID="inputGlucosePU"
        type="number"
        placeholder="Type in here ..."
        text1="Glucose per Unit"
        required="required"
      />
      <BtnPrimary
        onClick={setKeys(carbsPU, glucosePU)}
        containerClass="submitBtnPrimaryContainer"
        btnClass="submitBtnPrimary"
        type="submit"
        value="Save"
      />
      <MenuBar />
    </>
  );
};
