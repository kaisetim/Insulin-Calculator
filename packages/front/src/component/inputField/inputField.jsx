import React from "react";

import inputStyle from "./inputField.scss";

export const InputField = props => {
  const {
    containerClass,
    inputClass,
    inputID,
    type,
    onChange,
    value,
    placeholder,
    required,
    text1,
    text2
  } = props;

  return (
    <div className={`${inputStyle[`${containerClass}`]}`}>
      <input
        className={`${inputStyle[`${inputClass}`]}`}
        id={inputID}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
      />
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};
