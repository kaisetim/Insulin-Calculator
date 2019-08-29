import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import inputStyle from "./inputField.scss";

export const InputField = prop => {
  const { type, onChange, value, text1, text2 } = prop;

  return (
    <div className={`${inputStyle.inputContainer}`}>
      {/* <div className={`${inputStyle.inputRow}`}> */}
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder="Type in here ..."
      />
      {/* </div> */}
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};
