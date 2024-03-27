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
  clean: () => void
}

export const ButtonCreate: React.FC<Props> = ({
  setVision,
  name,
  title,
  priority,
  mark,
  clean
}) => {
  const [createTask] = useFarpostStore((state) => [state.createTask]);

  return (
    <div>
      <button
        className={styles.ButtonAdd}
        onClick={() => {
          createTask(name, title, priority, mark);
          setVision(false);
          clean()
        }}
      >
        Создать
      </button>
    </div>
  );
};
