import React, { useState } from "react";
import styles from "./index.module.scss";
import { useFarpostStore } from "../../../../data/stores/useFarpostStore";

interface Props {}

export const ButtonCreate: React.FC<Props> = () => {
  const [createTask] = useFarpostStore((state) => [state.createTask]);
  const [vision, setVision] = useState(false);
  const root = [styles.Modal];

  if (vision) {
    root.push(styles.Active);
    console.log(root);
  }

  return (
    <div>
      <button
        className={styles.ButtonAdd}
        onClick={() => createTask("1", 2, ["2"])}
      >
        Создать
      </button>
    </div>
  );
};
