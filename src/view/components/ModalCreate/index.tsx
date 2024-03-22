import React from "react";
import styles from "./index.module.scss";
import { useFarpostStore } from "../../../data/stores/useFarpostStore";
import { ButtonCreate } from "../buttons/ButtonCreate";

interface ModalCreate {
  setActive: (active: boolean) => void;
}

export const ModalCreate: React.FC<ModalCreate> = ({ setActive }) => {
  const [createTask] = useFarpostStore((state) => [state.createTask]);
  return (
    <div className={styles.ModalCreate} onClick={() => setActive(false)}>
      <div
        className={styles.ModalCreateContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.ModalCreateContentTitle}>
          <div>Новая задача</div>
        </div>
        <div className={styles.ModalCreateContentData}>
          <div className={styles.ModalCreateContentDataElement}>
            <div>Дата</div>
            <input type="date" />
          </div>
          <div className={styles.ModalCreateContentDataElement}>
            <div>Название</div>
            <input />
          </div>
          <div className={styles.ModalCreateContentDataElement}>
            <div>Описание</div>
            <input />
          </div>
          <div className={styles.ModalCreateContentDataElement}>
            <select>
              <option disabled selected>
                Выберите приоритет
              </option>
              <option value="3">Low</option>
              <option value="2">Medium</option>
              <option value="1">Hight</option>
            </select>
          </div>
          <div className={styles.ModalCreateContentDataElement}>
            <select>
              <option disabled selected>
                Выберите метку
              </option>
              <option value="3">Development</option>
              <option value="2">Design</option>
              <option value="1">Research</option>
            </select>
          </div>
        </div>
        <div className={styles.ModalCreateContentButton}>
          <ButtonCreate />
        </div>
      </div>
    </div>
  );
};
