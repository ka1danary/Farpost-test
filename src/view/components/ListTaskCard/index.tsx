import { TaskCard } from "../TaskCard";

import styles from "./index.module.scss";

interface Task {
  id: string;
  name: string;
  createdAt: Date; 
  title: string;
  priority: string[];
  mark: string[];
}

interface ListTaskCard {
  tasks : Task[];
}

export const ListTaskCard: React.FC<ListTaskCard> = ({
  tasks
}) => {

  
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
          <div>Пусто</div>
        </div>
      )}
    </div>
  );
};
