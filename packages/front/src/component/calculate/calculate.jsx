import React from "react";
import styles from "./calculate.scss";

export const Calculator = () => {
  return (
    <div>
      <input type="text" />
      <i className={styles["fas fa-plus-circle"]} />
      <input type="text" />
      <button>Calculate</button>
    </div>
  );
};
