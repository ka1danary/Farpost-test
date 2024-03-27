import React from "react";

import styles from "./index.module.scss";
import { Link } from "react-router-dom";

interface Props {
  href: string;
  title: string;
  type: string;
}

export const ButtonEdit: React.FC<Props> = ({ href, title, type }) => {
  const setType = (type: string, title: string) => {
    if (type === "void") {
      return <button className={styles.ButtonVoid}>{title}</button>;
    } else if (type === "danger") {
      return <button className={styles.ButtonDanger}>{title}</button>;
    } else if (type === "calm") {
      return (
        <button className={styles.ButtonCalm}>
          <svg
            style={{ marginRight: "10px" }}
            width="18.000000"
            height="18.000000"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              id="path"
              d="M2 16L3.42 16L13.2 6.22L11.77 4.79L2 14.57L2 16ZM0 18L0 13.75L13.2 0.57C13.4 0.39 13.62 0.25 13.86 0.14C14.1 0.04 14.35 0 14.62 0C14.89 0 15.15 0.04 15.4 0.14C15.65 0.25 15.86 0.39 16.04 0.6L17.42 2C17.62 2.18 17.77 2.39 17.86 2.64C17.95 2.89 18 3.14 18 3.39C18 3.66 17.95 3.92 17.86 4.16C17.77 4.4 17.62 4.62 17.42 4.82L4.25 18L0 18ZM16 3.39L14.6 2L16 3.39ZM12.47 5.52L11.77 4.79L13.2 6.22L12.47 5.52Z"
              fill="#FFFFFF"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
          {title}
        </button>
      );
    }
  };
  return <Link to={href}>{setType(type, title)}</Link>;
};
