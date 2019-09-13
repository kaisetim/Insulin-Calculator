import React from "react";

import btnPrimaryStyle from "./btnPrimary.scss";

export const BtnPrimary = props => {
  const { containerClass, btnClass, type, value, onClick } = props;

  return (
    <div className={btnPrimaryStyle[`${containerClass}`]}>
      <button
        className={btnPrimaryStyle[`${btnClass}`]}
        type={type}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
};
