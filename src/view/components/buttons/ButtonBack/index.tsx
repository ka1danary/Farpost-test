import React from "react";

import styles from "./index.module.scss";
import { Link } from "react-router-dom";

interface Props {}

export const ButtonnBack: React.FC<Props> = () => {
  return (
    <Link to="/">
      <button className={styles.ButtonnBack}>
        <div>Назад</div>
      </button>
    </Link>
  );
};
