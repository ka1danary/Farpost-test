import React, { useState } from "react";
import styles from "./index.module.scss";
import { ModalCreate } from "../../ModalCreate";

interface Props {}

export const ButtonAdd: React.FC<Props> = () => {
  const [vision, setVision] = useState(false);
  const root = [styles.Modal];

  if (vision) {
    root.push(styles.Active);
    console.log(root);
  }

  return (
    <div>
      <div className={root.join(" ")}>
        <ModalCreate setActive={setVision} />
      </div>
      <button className={styles.ButtonAdd} onClick={() => setVision(true)}>
        Добавить задачу
      </button>
    </div>
  );
};
