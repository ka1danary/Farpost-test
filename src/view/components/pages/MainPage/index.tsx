import React from "react";

import styles from "./index.module.scss";

import { ListTaskCard } from "../../ListTaskCard";
import { ButtonAdd } from "../../buttons/ButtonAdd";
import { SortBoxByNewOld } from "../../SortBoxByNewOld";
import { useFarpostStore } from "../../../../data/stores/useFarpostStore";

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
  const [tasks] = useFarpostStore((state) => [state.tasks]);

  return (
    <div className={styles.Page}>
      <div className={styles.MainPageTitle}>Список задач ({tasks.length})</div>
      <div className={styles.MainPage}>
        <div className={styles.MainPageSideBar}>
          <div>
            <SortBoxByNewOld />
          </div>
        </div>
        <div className={styles.MainPageCenter}>
          <ButtonAdd />
          <ListTaskCard />
        </div>
      </div>
    </div>
  );
};
