import styles from "./index.module.scss";
import { ButtonEdit } from "../../buttons/ButtonEdit";
import { TaskCardView } from "../../TaskCardView";
import { ButtonDelete } from "../../buttons/ButtonDelete";
import { useFarpostStore } from "../../../../data/stores/useFarpostStore";

interface Props {
  
}

export const ViewPage: React.FC<Props> = () => {
  const [task] = useFarpostStore( state => [
    state.task
  ])
  return (
    <div className={styles.View}>
      <div className={styles.ViewPage}>
        <div className={styles.ViewPageTitle}>
          <div>Просмотр задачи</div>
        </div>
        <div className={styles.ViewPageTask}>
          <div className={styles.ViewPageTaskButtonBox}>
            <div className={styles.ViewPageTaskButtonBoxLeft}>
              <ButtonEdit href={"/"} title={"Назад"} type={"void"} />
              <ButtonEdit
                href={"/edit"}
                title={"Редактировать"}
                type={"calm"}
              />
            </div>
            <div>
              <ButtonDelete id={task.id}/>
            </div>
          </div>
          <div className={styles.ViewPageTaskCard}>
            <TaskCardView
            />
          </div>
        </div>
      </div>
    </div>
  );
};
