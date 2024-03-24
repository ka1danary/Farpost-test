import { useEffect } from "react";
import { useFarpostStore } from "../../../data/stores/useFarpostStore";
import styles from "./index.module.scss";

interface Props {}

export const TaskCardView: React.FC<Props> = () => {
  const [ id, findTask] = useFarpostStore((state) => [
    state.id,

    state.findTask,
  ]);

  const task = findTask(id)
  
  return (
    <div className={styles.TaskCardView}>
      <div className={styles.TaskCardViewContent}>
        <div className={styles.TaskCardViewContentTitle}></div>
        <div className={styles.TaskCardViewContentBox}>
          <div className={styles.TaskCardViewContentBoxName}>
            <p>Название задачи</p> {task.name}
          </div>
          <div className={styles.TaskCardViewContentBoxName}>
            <p>Дата создания</p>
            {task.createdAt}
          </div>
          <div className={styles.TaskCardViewContentBoxName}>
            <p>Приоритет</p>
            {task.priority}
          </div>
          <div className={styles.TaskCardViewContentBoxName}>
            <p>Отметки</p>
            {task.mark}
          </div>
          <div className={styles.TaskCardViewContentBoxName}>
            <p>Описание</p>
            <div className={styles.TaskCardViewContentBoxNameTitle}>
              {task.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
