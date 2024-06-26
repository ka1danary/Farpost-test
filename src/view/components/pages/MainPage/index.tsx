import React, { useEffect, useState } from "react";

import styles from "./index.module.scss";

import { ButtonAdd } from "../../buttons/ButtonAdd";
import { SortBoxByNewOld } from "../../SortBoxByNewOld";
import { useFarpostStore } from "../../../../data/stores/useFarpostStore";
import { ListTaskCard } from "../../ListTaskCard";
import { SortBoxByPriorityMarks } from "../../SortBoxByPriorityMarks";

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
  const [tasks, propertiesForFilter, filterCards] = useFarpostStore((state) => [
    state.tasks,
    state.propertiesForFilter,
    state.filterCards,
  ]);
  const [newTasks, setNewTasks] = useState(tasks);

  useEffect(() => {
    setNewTasks(filterCards(propertiesForFilter));
  }, [propertiesForFilter, tasks]);

  return (
    <div className={styles.Page}>
      <div className={styles.MainPageTitle}>
        <div>
          <svg
            style={{ marginRight: "15px" }}
            width="37.000000"
            height="29.000000"
            viewBox="0 0 37 29"
            fill="none"
          >
            <path
              id="path"
              d="M21.86 10.69L21.86 7.61C22.78 7.18 23.73 6.87 24.7 6.66C25.66 6.44 26.68 6.34 27.75 6.34C28.47 6.34 29.19 6.4 29.89 6.52C30.59 6.64 31.28 6.79 31.95 6.97L31.95 9.87C31.28 9.6 30.6 9.4 29.91 9.26C29.22 9.13 28.5 9.06 27.75 9.06C26.68 9.06 25.66 9.2 24.68 9.49C23.69 9.77 22.76 10.18 21.86 10.69ZM21.86 20.66L21.86 17.58C22.78 17.15 23.73 16.84 24.7 16.62C25.66 16.41 26.68 16.31 27.75 16.31C28.47 16.31 29.19 16.37 29.89 16.49C30.59 16.61 31.28 16.76 31.95 16.94L31.95 19.84C31.28 19.57 30.6 19.37 29.91 19.23C29.22 19.09 28.5 19.03 27.75 19.03C26.68 19.03 25.66 19.16 24.68 19.43C23.69 19.71 22.76 20.11 21.86 20.66ZM21.86 15.67L21.86 12.59C22.78 12.17 23.73 11.85 24.7 11.64C25.66 11.43 26.68 11.32 27.75 11.32C28.47 11.32 29.19 11.38 29.89 11.5C30.59 11.63 31.28 11.78 31.95 11.96L31.95 14.86C31.28 14.59 30.6 14.38 29.91 14.25C29.22 14.11 28.5 14.04 27.75 14.04C26.68 14.04 25.66 14.19 24.68 14.47C23.69 14.76 22.76 15.16 21.86 15.67ZM9.25 21.75C10.56 21.75 11.84 21.9 13.09 22.22C14.34 22.54 15.58 23.01 16.81 23.65L16.81 5.79C15.66 5.07 14.44 4.53 13.16 4.16C11.87 3.8 10.56 3.62 9.25 3.62C8.24 3.62 7.23 3.73 6.24 3.94C5.24 4.15 4.28 4.47 3.36 4.89L3.36 22.83C4.34 22.47 5.31 22.2 6.28 22.02C7.25 21.84 8.24 21.75 9.25 21.75ZM20.18 23.65C21.41 23.01 22.65 22.54 23.9 22.22C25.15 21.9 26.43 21.75 27.75 21.75C28.75 21.75 29.74 21.84 30.71 22.02C31.68 22.2 32.65 22.47 33.63 22.83L33.63 4.89C32.71 4.47 31.75 4.15 30.75 3.94C29.76 3.73 28.75 3.62 27.75 3.62C26.43 3.62 25.12 3.8 23.83 4.16C22.55 4.53 21.33 5.07 20.18 5.79L20.18 23.65ZM18.5 29C17.15 27.85 15.69 26.96 14.12 26.32C12.55 25.69 10.93 25.37 9.25 25.37C8.07 25.37 6.91 25.54 5.78 25.87C4.64 26.2 3.55 26.67 2.52 27.27C1.93 27.61 1.36 27.59 0.81 27.23C0.27 26.87 0 26.34 0 25.64L0 3.8C0 3.47 0.07 3.15 0.23 2.85C0.38 2.55 0.61 2.32 0.92 2.17C2.21 1.45 3.55 0.9 4.96 0.54C6.36 0.18 7.79 0 9.25 0C10.87 0 12.46 0.22 14.02 0.67C15.57 1.13 17.07 1.81 18.5 2.71C19.92 1.81 21.42 1.13 22.97 0.67C24.53 0.22 26.12 0 27.75 0C29.2 0 30.63 0.18 32.03 0.54C33.44 0.9 34.78 1.45 36.07 2.17C36.38 2.32 36.61 2.55 36.76 2.85C36.92 3.15 37 3.47 37 3.8L37 25.64C37 26.34 36.72 26.87 36.18 27.23C35.63 27.59 35.06 27.61 34.47 27.27C33.44 26.67 32.35 26.2 31.21 25.87C30.08 25.54 28.92 25.37 27.75 25.37C26.06 25.37 24.44 25.69 22.87 26.32C21.3 26.96 19.84 27.85 18.5 29Z"
              fill="#000000"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
          {"\u00A0"}
          Список задач {"\u00A0"}
        </div>
        {tasks.length > 0 && (
          <div style={{ fontSize: "1em", color: "#6B0D89" }}>
            ({newTasks.length})
          </div>
        )}
      </div>
      <div className={styles.MainPage}>
        <div className={styles.MainPageSideBar}>
          <div className={styles.MainPageSideBarBox}>
            <div
              style={{
                marginBottom: "27px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SortBoxByNewOld />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SortBoxByPriorityMarks />
            </div>
          </div>
        </div>
        <div className={styles.MainPageCenter}>
          <div className={styles.MainPageCenterButtonAdd}>
            <ButtonAdd />
          </div>
          <div>
            <ListTaskCard tasks={newTasks} />
          </div>
        </div>
      </div>
    </div>
  );
};
