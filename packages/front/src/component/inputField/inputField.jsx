import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import gridStyle from "../../grid.scss";
import inputStyle from "./inputField.scss";

export const InputField = prop => {
  return (
    // <div className={`${inputStyle.inputContainer} ${gridStyle.row}`}>
    <div className={`${inputStyle.inputContainer} ${gridStyle["col-1-of-2"]}`}>
      {/* <div className={``}> */}
      <input type="text" onChange={prop.onChange} value={prop.value} />
      {/* <FontAwesomeIcon
            icon={faQuestion}
            className={`${inputStyle.questionIcon}`}
          /> */}
      <div className="text">
        <p>{prop.text1}</p>
        <p>{prop.text2}</p>
      </div>
      {/* </div> */}
    </div>
  );
};
