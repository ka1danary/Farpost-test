import React from "react";

import styles from "./index.module.scss";

import { useFarpostStore } from "../../../../data/stores/useFarpostStore";

interface Props {
  setVision: (vision: boolean) => void;
  date: string;
  name: string;
  setDate: (date: string) => void;
  setName: (name: string) => void;
}

export const ButtonCreate: React.FC<Props> = ({
  setVision,
  date,
  name = "Новая задача",
}) => {
  const [createTask] = useFarpostStore((state) => [state.createTask]);

  return (
    <div>
      <button
        className={styles.ButtonAdd}
        onClick={() => {
          createTask(name, date, 2, ["1", "2"]);
          setVision(false);
        }}
      >
        Создать
      </button>
    </div>
  );
};
