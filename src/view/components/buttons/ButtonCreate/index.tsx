import React from "react";

import styles from "./index.module.scss";

import { useFarpostStore } from "../../../../data/stores/useFarpostStore";

interface Props {
  setVision: (vision: boolean) => void;
  date: string;
  name: string;
  title: string;
  priority: string;
  mark: string;
  setDate: (date: string) => void;
  setName: (name: string) => void;
}

export const ButtonCreate: React.FC<Props> = ({
  setVision,
  date,
  name = "Новая задача",
  title = "Описание",
  priority,
  mark
}) => {
  const [createTask] = useFarpostStore((state) => [state.createTask]);

  return (
    <div>
      <button
        className={styles.ButtonAdd}
        onClick={() => {
          createTask(name, date, title, priority, mark);
          setVision(false);
        }}
      >
        Создать
      </button>
    </div>
  );
};
