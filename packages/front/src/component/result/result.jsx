import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEquals } from "@fortawesome/free-solid-svg-icons";

import gridStyle from "../../grid.scss";
import resultStyle from "./result.scss";

export const Result = prop => {
  return (
    <div className={`${resultStyle.resultContainer}`}>
      <div className={`${gridStyle.row} ${resultStyle.equalsRow}`}>
        <FontAwesomeIcon
          icon={faEquals}
          className={`${resultStyle.equalsIcon}`}
        />
      </div>
      <div className={`${gridStyle.row} ${resultStyle.resultRow}`}>
        <span id={resultStyle.resultNum}>{prop.value}</span> units
      </div>
    </div>
  );
};
