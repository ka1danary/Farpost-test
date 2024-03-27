import { useFarpostStore } from "../../../data/stores/useFarpostStore";
import styles from "./index.module.scss";

interface Props {}

export const TaskCardView: React.FC<Props> = () => {
  const [id, findTask] = useFarpostStore((state) => [state.id, state.findTask]);

  const task = findTask(id);

  return (
    <div className={styles.TaskCardView}>
      <div className={styles.TaskCardViewContent}>
        <div className={styles.TaskCardViewContentTitle}></div>
        <div className={styles.TaskCardViewContentBox}>
          <div className={styles.TaskCardViewContentBoxName}>
            <p>Название задачи</p>{" "}
            {task.name.length === 0 ? <div>...</div> : task.name}
          </div>
          <div className={styles.TaskCardViewContentBoxName}>
            <p>Дата создания</p>
            {task.createdAt.length === 0 ? <div>...</div> : task.createdAt}
          </div>
          <div className={styles.TaskCardViewContentBoxName}>
            <p>Приоритет</p>
            {task.priority.length === 0 ? <div>...</div> : task.priority.map((el, index) => <span key={index}>{el}</span>)}
          </div>
          <div className={styles.TaskCardViewContentBoxName}>
            <p>Метки</p>
            {task.mark.length === 0 ? (
              <div>...</div>
            ) : (
              task.mark.map((el, index) => <span key={index}>{el} </span>)
            )}
          </div>
          <div className={styles.TaskCardViewContentBoxName}>
            <hr
              style={{
                backgroundColor: "#c9b6ef",
                height: "1px",
                border: "none",
                width: "47vw",
              }}
            />
            <p>Описание</p>
            <div className={styles.TaskCardViewContentBoxNameTitle}>
              {task.title.length === 0 ? <div>...</div> : task.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
