import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCog, faInfo } from "@fortawesome/free-solid-svg-icons";

import menuStyles from "./menuBar.scss";
import gridStyles from "../../grid.scss";

export const MenuBar = () => {
  return (
    <div className={`${menuStyles.menuBar} ${gridStyles.row}`}>
      <div className={`${menuStyles.allBtns}`}>
        <div className={`${gridStyles["col-1-of-3"]}`}>
          <a href="#" className={`${menuStyles["icon-link"]}`}>
            <FontAwesomeIcon
              icon={faCalculator}
              className={`${menuStyles.calculatorIcon}`}
            />
          </a>
        </div>
        <div className={`${gridStyles["col-1-of-3"]}`}>
          <a href="#" className={`${menuStyles["icon-link"]}`}>
            <FontAwesomeIcon icon={faCog} className={`${menuStyles.cogIcon}`} />
          </a>
        </div>
        <div className={`${gridStyles["col-1-of-3"]}`}>
          <a href="#" className={`${menuStyles["icon-link"]}`}>
            <FontAwesomeIcon
              icon={faInfo}
              className={`${menuStyles.infoIcon}`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
