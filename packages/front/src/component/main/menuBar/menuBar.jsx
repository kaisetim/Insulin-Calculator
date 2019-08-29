import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCog, faInfo } from "@fortawesome/free-solid-svg-icons";

import menuStyles from "./menuBar.scss";

export const MenuBar = () => {
  return (
    <div className={`row ${menuStyles.menuBar}`}>
      <div className={`${menuStyles.iconCol}`}>
        <a href="/" className={`${menuStyles["icon-link"]}`}>
          <FontAwesomeIcon
            icon={faCalculator}
            className={`${menuStyles.calculatorIcon} ${menuStyles.icon}`}
          />
        </a>
      </div>
      <div className={`${menuStyles.iconCol}`}>
        <a href="/settings" className={`${menuStyles["icon-link"]}`}>
          <FontAwesomeIcon
            icon={faCog}
            className={`${menuStyles.cogIcon} ${menuStyles.icon}`}
          />
        </a>
      </div>
      <div className={`col-1-of-3 ${menuStyles.iconCol}`}>
        <a href="/info" className={`${menuStyles["icon-link"]}`}>
          <FontAwesomeIcon
            icon={faInfo}
            className={`${menuStyles.infoIcon} ${menuStyles.icon}`}
          />
        </a>
      </div>
    </div>
  );
};
