import React, { useState } from "react";

import { InputField } from "../component/inputField/inputField";
import { MenuBar } from "../component/menuBar/menuBar";
import { Result } from "../component/result/result";

export const Calculator = () => {
  const [glucoseLevel, setGlucoseLevel] = useState("");
  const [carbsLevel, setCarbsLevel] = useState("");

  const nominalGlucose = 120;
  const carbsPerUnit = localStorage.getItem("CarbsPU");
  const glucosePerUnit = localStorage.getItem("GlucosePU");
  const glucoseDiff = nominalGlucose - glucoseLevel;
  const units = glucoseDiff / glucosePerUnit + carbsLevel / carbsPerUnit;

  return (
    <>
      <div className="row">
        <InputField
          containerClass="inputContainerCalc"
          inputClass="inputCalc"
          type="number"
          placeholder="Type in here ..."
          text1="1u per 20.0 mg/dL"
          text2="Current Glucose Level"
          onChange={event => {
            setGlucoseLevel(event.target.value);
          }}
          value={glucoseLevel}
        />
        <InputField
          containerClass="inputContainerCalc"
          inputClass="inputCalc"
          type="number"
          placeholder="Type in here ..."
          text1="1u per 6.0 g"
          text2="Carbohydrates"
          onChange={event => {
            setCarbsLevel(event.target.value);
          }}
          value={carbsLevel}
        />
      </div>
      <Result value={units.toFixed(2)} />
      <MenuBar />
    </>
  );
};
