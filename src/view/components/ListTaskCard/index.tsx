import React from "react";
import { TaskCard } from "../TaskCard";
import { useFarpostStore } from "../../../data/stores/useFarpostStore";

import styles from "./index.module.scss";

export const ListTaskCard: React.FC = () => {
const tasks = useFarpostStore((state) => state.tasks);
  return (
    <div className={styles.List}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.name}
          createdAt={task.createdAt}
          priority={task.priority}
          mark={task.mark}
        />
      ))}
    </div>
  );
};
