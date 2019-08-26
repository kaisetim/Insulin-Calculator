import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import inputStyle from "./inputField.scss";

export const InputField = prop => {
  return (
    <div className={`${prop.className} ${inputStyle.inputContainer}`}>
      <div className={`${inputStyle.inputRow}`}>
        <input
          type={prop.type}
          onChange={prop.onChange}
          value={prop.value}
          placeholder="Type in here ..."
        />
        {/* <FontAwesomeIcon
          icon={faQuestion}
          className={`${inputStyle.questionIcon}`}
        /> */}
      </div>
      <p>{prop.text1}</p>
      <p>{prop.text2}</p>
    </div>
  );
};
