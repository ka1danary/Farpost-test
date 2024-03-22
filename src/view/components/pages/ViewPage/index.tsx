import { ButtonnBack } from "../../buttons/ButtonBack";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { ButtonEdit } from "../../buttons/ButtonEdit";

interface Props {
  key: string;
  id: string;
  name: string;
  createdAt: string;
  priority: number;
  mark: string[];
}

export const ViewPage: React.FC<Props> = ({
  id,
  name,
  createdAt,
  priority,
  mark,
}) => {
  return (
    <div className={styles.ViewPage}>
      <div className={styles.ViewPageTitle}>
        <div>Просмотр задачи</div>
      </div>
      <div className={styles.ViewPageTask}>
        <div className={styles.ViewPageTaskButtonBox}>
          <div>
            <ButtonEdit href={"/"} title={"Назад"} type={"void"} />
            <ButtonEdit href={"/edit"} title={"Редактировать"} type={"calm"} />
          </div>

          <div>
            <ButtonEdit href={"/edit"} title={"Удалить"} type={"danger"} />
          </div>
        </div>
        <div className={styles.ViewPageTaskCard}>Карточка</div>
      </div>
    </div>
  );
};
