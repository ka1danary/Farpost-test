import { ButtonnBack } from "../../buttons/ButtonBack";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

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
            <ButtonnBack />
            <Link to='/edit'>
              <button>Редактировать</button>
            </Link>
          </div>

          <button>Удалить</button>
        </div>
        <div className={styles.ViewPageTaskCard}>Карточка</div>
      </div>
    </div>
  );
};
