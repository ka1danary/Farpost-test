import React from "react";

import styles from "./index.module.scss";

import { useFarpostStore } from "../../../../data/stores/useFarpostStore";

interface Props {
  setVision: (vision: boolean) => void;
  name: string;
  title: string;
  priority: string[];
  mark: string[];
  setName: (name: string) => void;
}

export const ButtonCreate: React.FC<Props> = ({
  setVision,
  name,
  title,
  priority,
  mark,
}) => {
  const [createTask] = useFarpostStore((state) => [state.createTask]);

  return (
    <div>
      <button
        className={styles.ButtonAdd}
        onClick={() => {
          createTask(name, title, priority, mark);
          setVision(false);
        }}
      >
        Создать
      </button>
    </div>
  );
};
