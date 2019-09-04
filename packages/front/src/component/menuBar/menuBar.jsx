import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCog, faInfo } from "@fortawesome/free-solid-svg-icons";

import menuStyles from "./menuBar.scss";

export const MenuBar = () => {
  return (
    <div className={`row ${menuStyles.menuBar}`}>
      <div className={`${menuStyles.iconCol}`}>
        <Link to="/" className={`${menuStyles["icon-link"]}`}>
          <FontAwesomeIcon
            icon={faCalculator}
            className={`${menuStyles.calculatorIcon} ${menuStyles.icon}`}
          />
        </Link>
      </div>
      <div className={`${menuStyles.iconCol}`}>
        <Link to="/settings" className={`${menuStyles["icon-link"]}`}>
          <FontAwesomeIcon
            icon={faCog}
            className={`${menuStyles.cogIcon} ${menuStyles.icon}`}
          />
        </Link>
      </div>
      <div className={`col-1-of-3 ${menuStyles.iconCol}`}>
        <Link to="/info" className={`${menuStyles["icon-link"]}`}>
          <FontAwesomeIcon
            icon={faInfo}
            className={`${menuStyles.infoIcon} ${menuStyles.icon}`}
          />
        </Link>
      </div>
    </div>
  );
};