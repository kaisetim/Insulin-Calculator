import React, { useState } from "react";

import { InputField } from "../inputField/inputField";
import { MenuBar } from "../menuBar/menuBar";
import { Result } from "../result/result";

export const App = () => {
  const [glucoseLevel, setGlucoseLevel] = useState("");
  const [carbsLevel, setCarbsLevel] = useState("");

  const nominalGlucose = 120;
  const carbsPerUnit = 8;
  const glucosePerUnit = 24;
  const glucoseDiff = nominalGlucose - glucoseLevel;
  const units = glucoseDiff / glucosePerUnit + carbsLevel / carbsPerUnit;

  return (
    <>
      <div className="row">
        <InputField
          type="number"
          className="col-1-of-2"
          text1="1u per 20.0 mg/dL"
          text2="Current Glucose Level"
          onChange={event => {
            setGlucoseLevel(event.target.value);
          }}
          value={glucoseLevel}
        />
        <InputField
          type="number"
          className="col-1-of-2"
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
