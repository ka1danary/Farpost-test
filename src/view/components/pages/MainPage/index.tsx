import React from "react";

//import { useFarpostStore } from "../../../../data/stores/useFarpostStore";

import styles from "./index.module.scss";

import { ListTaskCard } from "../../ListTaskCard";
import { ButtonAdd } from "../../buttons/ButtonAdd";
import { SortBoxByNewOld } from "../../SortBoxByNewOld";

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
  // const [
  //   tasks,
  //   sortTaskByNewDate,
  //   sortTaskByOldDate,
  //   filterByPriority,
  //   createTask,
  // ] = useFarpostStore((state) => [
  //   state.tasks,
  //   state.sortTaskByNewDate,
  //   state.sortTaskByOldDate,
  //   state.filterByPriority,
  //   state.createTask,
  // ]);

  return (
    <div>
      <div className={styles.MainPageTitle}>Список задач</div>
      <div className={styles.MainPage}>
        <div className={styles.MainPageSideBar}>
          <SortBoxByNewOld />
        </div>
        <div className={styles.MainPageCenter}>
          <ButtonAdd />
          <ListTaskCard />
        </div>
      </div>
    </div>
  );
};
