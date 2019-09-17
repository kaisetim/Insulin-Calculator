import React from "react";

import textBoxStyle from "./text-box.scss";

export const TextBox = props => {
  //   const { text } = props;

  return (
    <div className={`${textBoxStyle.textBoxContainer}`}>
      <p>
        <a href={`${props.text}`} className={`${textBoxStyle.repoLink}`}>
          Visit our GitHub Repo!
        </a>
      </p>
    </div>
  );
};
