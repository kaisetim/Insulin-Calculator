import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEquals } from "@fortawesome/free-solid-svg-icons";

import equalsStyle from "./equalsIcon.scss";

export const Equals = () => {
  return (
    <div className={`${equalsStyle.equalsContainer}`}>
      <FontAwesomeIcon
        icon={faEquals}
        className={`${equalsStyle.equalsIcon}`}
      />
    </div>
  );
};
