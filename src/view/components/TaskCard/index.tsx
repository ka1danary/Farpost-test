import React from "react";
import styles from "./index.module.scss";

interface Task {
  id: string;
  name: string;
  createdAt: number;
  priority: number;
  mark: string [];
}

export const TaskCard: React.FC<Task> = ({
  id,
  name,
  createdAt,
  priority,
  mark,
}) => {
  return (
    <div className={styles.TaskCard}>
      <h2 className={styles.TaskCardName}>{name + id}</h2>
      <div className={styles.TaskCardContent}>
        <div>Создано: {createdAt}</div>
        <div>Приоритет: {priority}</div>
        <div>Метка: {mark}</div>
      </div>
    </div>
  );
};
