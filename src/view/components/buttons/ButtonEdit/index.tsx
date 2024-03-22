import React from "react";

import styles from "./index.module.scss";
import { Link } from "react-router-dom";

interface Props {
  href: string;
  title: string;
  type: string;
}

export const ButtonEdit: React.FC<Props> = (
  {
    href,
    title,
    type
  }
) => {

  const setType = (type : string, title: string) => {
    if(type === 'void') {
      return (
        <button className={styles.ButtonVoid}>
          {title}
        </button>
      )
    } else if(type === 'danger') {
      return (
        <button className={styles.ButtonDanger}>
          {title}
        </button>
      )
    }
    else if(type === 'calm') {
      return (
        <button className={styles.ButtonCalm}>
          {title}
        </button>
      )
    }
  }

  return (
    <Link to={href}>
      {setType(type, title)}
    </Link>
  );
};
