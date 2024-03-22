import React from "react";

import styles from "./index.module.scss";
import { Link } from "react-router-dom";

interface Props {
  href: string;
}

export const ButtonnBack: React.FC<Props> = (
  {
    href
  }
) => {
  return (
    <Link to={href}>
      <button className={styles.ButtonnBack}>
        <div>Назад</div>
      </button>
    </Link>
  );
};
