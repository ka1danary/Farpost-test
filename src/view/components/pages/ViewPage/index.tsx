import styles from "./index.module.scss";
import { ButtonEdit } from "../../buttons/ButtonEdit";
import { TaskCardView } from "../../TaskCardView";
import { ButtonDelete } from "../../buttons/ButtonDelete";

interface Props {}

export const ViewPage: React.FC<Props> = () => {
  return (
    <div className={styles.View}>
      <div className={styles.ViewPage}>
        <div className={styles.ViewPageTitle}>
          <div>Просмотр задачи</div>
        </div>
        <div className={styles.ViewPageTask}>
          <div className={styles.ViewPageTaskButtonBox}>
            <div className={styles.ViewPageTaskButtonBoxLeft}>
              <div style={{'marginRight' : '15px'}}> 
                <ButtonEdit href={"/"} title={"Назад"} type={"void"} />
              </div>

              <ButtonEdit
                href={"/edit"}
                title={"Редактировать"}
                type={"calm"}
              />
            </div>
            <div>
              <ButtonDelete />
            </div>
          </div>
          <div className={styles.ViewPageTaskCard}>
            <TaskCardView />
          </div>
        </div>
      </div>
    </div>
  );
};
