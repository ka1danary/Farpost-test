import styles from "./index.module.scss";

import { useFarpostStore } from "../../../data/stores/useFarpostStore";

interface SortBoxByNewOld {}

export const SortBoxByNewOld: React.FC<SortBoxByNewOld> = () => {
  const [sortTaskByNewDate, sortTaskByOldDate] = useFarpostStore((state) => [
    state.sortTaskByNewDate,
    state.sortTaskByOldDate,
  ]);
  return (
    <div className={styles.SortBox}>
      <div className={styles.SortBoxTitle}>Сортировать</div>
      <div className={styles.SortBoxContent}>
        <button
          className={styles.SortBoxContentButtonSort}
          onClick={sortTaskByNewDate}
        >
          <div className={styles.SortBoxContentButtonSortSVG}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              viewBox="0 -960 960 960"
              width="25"
            >
              <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
            </svg>
          </div>
          <div>Новые</div>
        </button>
        <button
          className={styles.SortBoxContentButtonSort}
          onClick={sortTaskByOldDate}
        >
          <div className={styles.SortBoxContentButtonSortSVG}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
          <div>Старые</div>
        </button>
      </div>
    </div>
  );
};
