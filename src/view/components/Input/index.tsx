import { useState } from "react";
import styles from "./index.module.scss";
interface Props {
  set: (value: string) => void;
  placeholder: string;
}

export const Input: React.FC<Props> = ({ set, placeholder }) => {
  const [value, setValue] = useState("");

  const helper = (temp: string) => {
    setValue(temp);
    set(temp);
  };
  return (
    <input
      className={styles.Input}
      placeholder={placeholder}
      onChange={(e) => helper(e.target.value)}
      value={value}
    />
  );
};
