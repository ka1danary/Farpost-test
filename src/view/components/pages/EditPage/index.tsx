import styles from "./index.module.scss";

import { ButtonEdit } from "../../buttons/ButtonLink";
import { TaskCardEdit } from "../../TaskCardEdit";

interface Props {}

export const EditPage: React.FC<Props> = () => {
  return (
    <div className={styles.EditPage}>
      <div className={styles.EditPageBox}>
        <div className={styles.EditPageBoxTitle}>Редактирование задачи</div>
        <div className={styles.EditPageBoxContent}>
          <div>
            <div className={styles.EditPageBoxContentButtons}>
              <ButtonEdit href="/view" title="Назад" type="void"></ButtonEdit>
            </div>
            <div className={styles.EditPageBoxContentCard}>
              <TaskCardEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
