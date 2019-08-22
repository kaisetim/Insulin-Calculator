import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEquals } from "@fortawesome/free-solid-svg-icons";

import resultStyle from "./result.scss";

export const Result = prop => {
  return (
    <div className={`${resultStyle.resultContainer}`}>
      <div className={`row ${resultStyle.equalsRow}`}>
        <FontAwesomeIcon
          icon={faEquals}
          className={`${resultStyle.equalsIcon}`}
        />
      </div>
      <div className={`row ${resultStyle.resultRow}`}>
        <span id={resultStyle.resultNum}>{prop.value}</span> units
      </div>
    </div>
  );
};
