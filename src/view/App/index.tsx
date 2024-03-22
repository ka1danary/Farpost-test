import React from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./index.module.scss";

//import { useFarpostStore } from "../../data/stores/useFarpostStore";
import { MainPage } from "../components/pages/MainPage";

export const App: React.FC = () => {
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
    <div className={styles.article}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};
