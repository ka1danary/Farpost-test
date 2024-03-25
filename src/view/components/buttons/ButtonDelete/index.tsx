import styles from "./index.module.scss";
import { useFarpostStore } from "../../../../data/stores/useFarpostStore";
import { Link } from "react-router-dom";
interface Props {}
export const ButtonDelete: React.FC<Props> = () => {
  const [removeTask, id] = useFarpostStore((state) => [
    state.removeTask,
    state.id,
  ]);
  return (
    <Link to="/">
      <button
        className={styles.ButtonDelete}
        onClick={() => {
          console.log("Удалена внутри" + id);
          removeTask(id);
        }}
      >
        <svg
          width="16.000000"
          height="18.000000"
          viewBox="0 0 16 18"
          fill="none"
        >
          <path
            id="path"
            d="M3 18C2.45 18 1.97 17.8 1.58 17.41C1.19 17.02 1 16.54 1 16L1 3L0 3L0 1L5 1L5 0L11 0L11 1L16 1L16 3L15 3L15 16C15 16.54 14.8 17.02 14.41 17.41C14.02 17.8 13.55 18 13 18L3 18ZM13 3L3 3L3 16L13 16L13 3ZM5 14L7 14L7 5L5 5L5 14ZM9 14L11 14L11 5L9 5L9 14ZM3 3L3 16L3 3Z"
            fill="#FFFFFF"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
        </svg>
        Удалить
      </button>
    </Link>
  );
};
