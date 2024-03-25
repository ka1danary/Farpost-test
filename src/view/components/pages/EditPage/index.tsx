import { ButtonEdit } from "../../buttons/ButtonEdit";
import { TaskCardEdit } from "../../TaskCardEdit";
import styles from "./index.module.scss";

interface Props {

}

export const EditPage: React.FC<Props> = () => {
  
  return (
    <div className={styles.EditPage}>
      <div className={styles.EditPageBox}>
          <div className={styles.EditPageBoxTitle}>
              Редактирование задачи
          </div>
          <div className={styles.EditPageBoxContent}>
              <div  className={styles.EditPageBoxContentButtons}>
                <ButtonEdit href='/view' title='Назад' type='void' ></ButtonEdit>
              </div>
              <div  className={styles.EditPageBoxContentCard}>
                  <TaskCardEdit/>
              </div>
          </div>
      </div>
    </div>
  );
};
