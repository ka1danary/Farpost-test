import { TaskCard } from "../TaskCard";
import { useFarpostStore } from "../../../data/stores/useFarpostStore";

import styles from "./index.module.scss";

interface ListTaskCard {
  modalOpen: () => void;
}

export const ListTaskCard: React.FC = () => {
  const tasks = useFarpostStore((state) => state.tasks);

  return (
    <div className={styles.List}>
      {tasks.length != 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            name={task.name}
            title={task.title}
            createdAt={task.createdAt}
            priority={task.priority}
            mark={task.mark}
          />
        ))
      ) : (
        <div className={styles.Title}>
          <div>У вас пока нет задач</div>
        </div>
      )}
    </div>
  );
};
