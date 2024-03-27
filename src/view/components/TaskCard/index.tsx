import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

import { useFarpostStore } from "../../../data/stores/useFarpostStore";

interface Task {
  id: string;
  name: string;
  title?: string;
  createdAt: string;
  priority: string[];
  mark: string[];
}

export const TaskCard: React.FC<Task> = ({
  id,
  name,
  createdAt,
  priority,
  mark,
}) => {
  const [removeTask, setId] = useFarpostStore((state) => [
    state.removeTask,
    state.setId,
  ]);

  const setColor = (color: string[]) => {
    let key = "default";
    if (color[0] === "High") {
      key = "high";
    } else if (color[0] === "Medium") {
      key = "medium";
    } else if (color[0] === "Low") {
      key = "low";
    }
    return (
      <svg
        key={key}
        width="15.000000"
        height="15.000000"
        viewBox="0 0 15 15"
        fill="none"
      >
        <circle
          id="Ellipse 2"
          cx="7.500000"
          cy="7.500000"
          r="7.500000"
          fill={
            key === "high"
              ? "#FF9B9B"
              : key === "medium"
                ? "#FFED48"
                : key === "low"
                  ? "#60D5A4"
                  : "#D3D3D3"
          }
          fillOpacity="1.000000"
        />
      </svg>
    );
  };

  return (
    <div key={id} className={styles.TaskCard}>
      <Link to="/view" onClick={() => setId(id)}>
        <div>
          <div className={styles.TitleBox}>
            {setColor(priority)}
            <h2 className={styles.TaskCardTitle}>{name || "..."}</h2>
          </div>

          <div className={styles.TaskCardContent}>
            <div className={styles.TaskCardContentEl}>
              <div>Дата: {"\u00A0"}</div> {createdAt || <span>...</span>}
            </div>
            <div className={styles.TaskCardContentEl}>
              <div>Приоритет: {"\u00A0"}</div>{" "}
              {priority.length === 0 ? <span>...</span> : priority}
            </div>
            <div className={styles.TaskCardContentEl}>
              <div>Метка: {"\u00A0"}</div>{" "}
              {mark.length === 0 ? (
                <span>...</span>
              ) : (
                mark.map((el, index) => (
                  <span key={index}>
                    {el} {"\u00A0"}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.TaskCardButton}>
        <button
          onClick={() => {
            removeTask(id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
