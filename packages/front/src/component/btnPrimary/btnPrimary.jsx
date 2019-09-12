import React from "react";

import btnPrimaryStyle from "./btnPrimary.scss";

export const BtnPrimary = props => {
  const { containerClass, btnClass, type, value } = props;

  return (
    <div className={btnPrimaryStyle[`${containerClass}`]}>
      <button className={btnPrimaryStyle[`${btnClass}`]} type={type}>
        {value}
      </button>
    </div>
  );
};
