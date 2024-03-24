import styles from './index.module.scss'
import { useFarpostStore } from "../../../../data/stores/useFarpostStore";
import { Link } from "react-router-dom";
interface Props {
  id: string;
}

export const ButtonDelete: React.FC<Props> = ({ id }) => {
  const [removeTask] = useFarpostStore((state) => [state.removeTask]);
  return (
    <Link to="/">
      <button className={styles.ButtonDelete}
        onClick={() => {
          removeTask(id);
        }}
      >
        Удалить
      </button>
    </Link>
  );
};
