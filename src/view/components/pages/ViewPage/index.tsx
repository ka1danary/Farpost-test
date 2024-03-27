import styles from "./index.module.scss";

import { ButtonEdit } from "../../buttons/ButtonLink";
import { TaskCardView } from "../../TaskCardView";
import { ButtonDelete } from "../../buttons/ButtonDelete";

interface Props {}

export const ViewPage: React.FC<Props> = () => {
  return (
    <div className={styles.View}>
      <div className={styles.ViewPage}>
        <div className={styles.ViewPageTitle}>
          <div className={styles.ViewPageTitleSvg}>
            {" "}
            <svg
              width="23.000000"
              height="32.000000"
              viewBox="0 0 23 32"
              fill="none"
            >
              <path
                id="path"
                d="M19.16 14.4L23 17.6L23 20.8L13.41 20.8L13.41 30.4L11.5 32L9.58 30.4L9.58 20.8L0 20.8L0 17.6L3.83 14.4L3.83 3.2L1.91 3.2L1.91 0L21.08 0L21.08 3.2L19.16 3.2L19.16 14.4ZM5.46 17.6L17.53 17.6L15.33 15.76L15.33 3.2L7.66 3.2L7.66 15.76L5.46 17.6Z"
                fill="#000000"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
            Просмотр задачи
          </div>
        </div>
        <div className={styles.ViewPageTask}>
          <div className={styles.ViewPageTaskButtonBox}>
            <div className={styles.ViewPageTaskButtonBoxLeft}>
              <div style={{ marginRight: "15px" }}>
                <ButtonEdit href={"/"} title={"Назад"} type={"void"} />
              </div>

              <ButtonEdit
                href={"/edit"}
                title={"Редактировать"}
                type={"calm"}
              />
            </div>
            <div className={styles.ViewPageTaskButtonBoxRight}>
              <ButtonDelete />
            </div>
          </div>
          <div className={styles.ViewPageTaskCard}>
            <TaskCardView />
          </div>
        </div>
      </div>
    </div>
  );
};
