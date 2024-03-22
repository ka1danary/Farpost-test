import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

import { useFarpostStore } from "../../../data/stores/useFarpostStore";

interface Task {
  id: string;
  name: string;
  createdAt: string;
  priority: string;
  mark: string[];
}

export const TaskCard: React.FC<Task> = ({
  id,
  name,
  createdAt,
  priority,
  mark,
}) => {
  const [removeTask] = useFarpostStore((state) => [state.removeTask]);
  const setColor = (color: string) => {
    if (color === "Hight") {
      return (
        <svg
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
            fill="#FF9B9B"
            fill-opacity="1.000000"
          />
        </svg>
      );
    } else if (color === "Medium") {
      return (
        <svg
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
            fill="#FFDF8E"
            fill-opacity="1.000000"
          />
        </svg>
      );
    } else if (color === "Low") {
      return (
        <svg
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
            fill="#9CE9A4"
            fill-opacity="1.000000"
          />
        </svg>
      );
    } else if (color === "None") {
      return (
        <svg
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
            fill="#D3D3D3"
            fill-opacity="1.000000"
          />
        </svg>
      );
    }
  };
  return (
    <div>
      <div className={styles.TaskCard}>
        <Link to="/view">
          <div>
            <div className={styles.TitleBox}>
              {setColor(priority)}
              <h2 className={styles.TaskCardTitle}>{name} </h2>
            </div>

            <div className={styles.TaskCardContent}>
              <div className={styles.TaskCardContent}>Дата: {createdAt}</div>
              <div className={styles.TaskCardContent}>
                Приоритет: {priority}
              </div>
              <div className={styles.TaskCardContent}>Метка: {mark}</div>
            </div>
          </div>
        </Link>
        <div className={styles.TaskCardButton}>
          <button
            onClick={() => {
              removeTask(id);
            }}
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};
