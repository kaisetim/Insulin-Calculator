import React from "react";

import inputStyle from "./inputField.scss";

export const InputField = props => {
  const {
    containerClass,
    inputClass,
    type,
    onChange,
    value,
    placeholder,
    text1,
    text2
  } = props;

  return (
    <div className={`${inputStyle[`${containerClass}`]}`}>
      <input
        className={`${inputStyle[`${inputClass}`]}`}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};
