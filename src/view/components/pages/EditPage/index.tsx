import styles from "./index.module.scss";

import { ButtonEdit } from "../../buttons/ButtonLink";
import { TaskCardEdit } from "../../TaskCardEdit";

interface Props {}

export const EditPage: React.FC<Props> = () => {
  return (
    <div className={styles.EditPage}>
      <div className={styles.EditPageBox}>
        <div className={styles.EditPageBoxTitle}>
          <svg
            width="29.000000"
            height="27.000000"
            viewBox="0 0 29 27"
            fill="none"
            
          >
            <path
              id="path"
              d="M1.52 27L1.52 20.62L21.63 0.89C21.94 0.6 22.28 0.37 22.66 0.22C23.04 0.07 23.42 0 23.81 0C24.21 0 24.6 0.07 24.97 0.22C25.34 0.37 25.66 0.6 25.94 0.89L28.08 3C28.38 3.27 28.61 3.59 28.77 3.95C28.92 4.31 29 4.7 29 5.1C29 5.47 28.92 5.85 28.77 6.22C28.61 6.6 28.38 6.93 28.08 7.23L8.01 27L1.52 27ZM4.57 24L6.71 24L21.71 9.29L20.64 8.21L19.53 7.16L4.57 21.9L4.57 24ZM25.94 5.13L23.77 3L25.94 5.13ZM20.64 8.21L19.53 7.16L21.71 9.29L20.64 8.21ZM16.78 27C18.67 27 20.41 26.53 22.01 25.61C23.61 24.68 24.42 23.4 24.42 21.75C24.42 20.85 24.17 20.07 23.69 19.42C23.21 18.77 22.56 18.21 21.75 17.73L19.49 19.95C20.08 20.2 20.54 20.47 20.87 20.77C21.2 21.07 21.36 21.4 21.36 21.75C21.36 22.32 20.9 22.84 19.97 23.3C19.04 23.76 17.98 24 16.78 24C16.35 24 15.99 24.14 15.7 24.43C15.4 24.71 15.26 25.07 15.26 25.5C15.26 25.92 15.4 26.28 15.7 26.56C15.99 26.85 16.35 27 16.78 27ZM2.4 15.52L4.69 13.27C4.18 13.07 3.78 12.86 3.49 12.65C3.19 12.44 3.05 12.22 3.05 12C3.05 11.7 3.28 11.4 3.73 11.1C4.19 10.8 5.16 10.33 6.63 9.71C8.87 8.76 10.36 7.89 11.1 7.12C11.84 6.35 12.21 5.47 12.21 4.5C12.21 3.12 11.65 2.03 10.53 1.21C9.41 0.4 7.93 0 6.1 0C4.96 0 3.93 0.2 3.03 0.6C2.13 1 1.43 1.48 0.95 2.06C0.67 2.38 0.55 2.75 0.61 3.14C0.66 3.54 0.85 3.87 1.18 4.12C1.51 4.39 1.88 4.51 2.28 4.46C2.69 4.41 3.03 4.25 3.31 3.97C3.67 3.62 4.07 3.37 4.5 3.22C4.93 3.07 5.46 3 6.1 3C7.14 3 7.91 3.14 8.41 3.45C8.9 3.75 9.15 4.1 9.15 4.5C9.15 4.85 8.93 5.16 8.49 5.45C8.04 5.74 7.02 6.25 5.41 6.97C3.38 7.85 1.97 8.64 1.18 9.35C0.39 10.06 0 10.95 0 12C0 12.8 0.21 13.48 0.64 14.04C1.08 14.6 1.66 15.1 2.4 15.52Z"
              fill="#000000"
              fill-opacity="1.000000"
              fill-rule="nonzero"
            />
          </svg>
          Редактирование задачи
        </div>
        <div className={styles.EditPageBoxContent}>
          <div>
            <div className={styles.EditPageBoxContentButtons}>
              <ButtonEdit href="/view" title="Назад" type="void"></ButtonEdit>
            </div>
            <div className={styles.EditPageBoxContentCard}>
              <TaskCardEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
