import React from "react";

import styles from "./index.module.scss";

interface Task {
  id: string;
  name: string;
  createdAt: number;
  priority: number;
  mark: string[];
}

export const TaskCard: React.FC<Task> = ({
  //id,
  name,
  createdAt,
  priority,
  mark,
}) => {
  return (
    <div>
      <div className={styles.TaskCard}>
        <h2 className={styles.TaskCardTitle}>{name}</h2>
        <div className={styles.TaskCardContent}>
          <div className={styles.TaskCardContent}>Создано: {createdAt}</div>
          <div className={styles.TaskCardContent}>Приоритет: {priority}</div>
          <div className={styles.TaskCardContent}>Метка: {mark}</div>
        </div>
      </div>
    </div>
  );
};
