import React, { ReactNode } from "react";

import styles from "./index.module.scss";

interface SortBox {
  title?: string;
  Component: ReactNode[];
}

export const SortBox: React.FC<SortBox> = ({ Component }) => {
  return (
    <div className={styles.SortBox}>
      <h2>Приоритет</h2>
      {Component.map((comp) => (
        <div>{comp}</div>
      ))}
    </div>
  );
};
