// import React from "react";
// import styles from "./menuBar.scss";

// export const MenuBar = () => {
//   console.log(styles);
//   return (
//     <div className={styles["menuBar"]}>
//       <div className={styles["menuBar__calculator"]}>
//         <i className={styles["fas fa-calculator"]} />
//       </div>
//       <div className={styles["menuBar__gear"]}>
//         <i className={styles["fas fa-cog"]} />
//       </div>
//       <div className={styles["menuBar__info"]}>
//         <i className={`${styles["fas"]} ${styles["fa-info"]}`} />
//       </div>
//     </div>
//   );
// };

import React from "react";
import styles from "./menuBar.scss";

export const MenuBar = () => {
  console.log(styles);
  return (
    <div className="menuBar">
      <div className="menuBar__calculator">
        <i className="fas fa-calculator" />
      </div>
      <div className="menuBar__gear">
        <i className="fas fa-cog" />
      </div>
      <div className="menuBar__info">
        <i className="fas fa-info" />
      </div>
    </div>
  );
};
