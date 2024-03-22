import { Checkbox } from "../Checkbox";
import styles from "./index.module.scss";

interface SortBoxByNewOld {}

export const SortBoxByNewOld: React.FC<SortBoxByNewOld> = () => {
  return (
    <div className={styles.SortBox}>
      <div className={styles.SortBoxTitle}>Сортировать</div>
      <div className={styles.SortBoxContent}>
        <Checkbox title={"Новые"} />
        <Checkbox title={"Старые"} />
      </div>
    </div>
  );
};
