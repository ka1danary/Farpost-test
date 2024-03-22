import { useState } from "react";
import React from "react";
import styles from "./index.module.scss";

interface Props {
  set: (date: string) => void;
}

export const InputDate: React.FC<Props> = ({ set }) => {
  const [value, setValue] = useState(" ");
  const helper = (temp: string) => {
    setValue(temp);
    set(temp);
  };

  return (
    <div className={styles.InputDate}>
      <input
        type="date"
        onChange={(e) => helper(e.target.value)}
        value={value}
      />
    </div>
  );
};
