import React, { useState } from "react";
import styles from "./index.module.scss";
import { ButtonCreate } from "../buttons/ButtonCreate";
import { Input } from "../Input";

import { InputDate } from "../InputDate";
import { CustomSelect } from "../CustomSelect";

interface ModalCreate {
  setActive: (active: boolean) => void;
}

export const ModalCreate: React.FC<ModalCreate> = ({ setActive }) => {
  //const [createTask] = useFarpostStore((state) => [state.createTask]);
  const [date, setDate] = useState("...");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("None");
  const [mark, setMark] = useState("...");

  return (
    <div className={styles.ModalCreate} onClick={() => setActive(false)}>
      <div
        className={styles.ModalCreateContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className={styles.ModalCreateContentTitle}>
            <div>Новая задача</div>
          </div>
          <div className={styles.ModalCreateContentData}>
            <div className={styles.ModalCreateContentDataElement}>
              <div>Дата</div>
              <InputDate set={setDate} />
            </div>
            <div className={styles.ModalCreateContentDataElement}>
              <div>Название</div>
              <Input set={setName} placeholder={"Название задачи"}/>
            </div>
            <div className={styles.ModalCreateContentDataElement}>
              <div>Описание</div>
              <Input set={setTitle} placeholder={"Описание задачи"}/>
            </div>
            <div className={styles.ModalCreateContentDataElement}>
              <div className={styles.ModalCreateContentDataElementSelect}>
                <div>
                  <CustomSelect
                    title={"Приоритет"}
                    values={["Low", "Medium", "Hight"]}
                    set={setPriority}
                  />
                </div>
                <div>
                  <CustomSelect
                    title={"Отметка"}
                    values={["Development", "Designed", "Research"]}
                    set={setMark}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ModalCreateContentButton}>
            <ButtonCreate
              setVision={setActive}
              date={date}
              name={name}
              title={title}
              priority={priority}
              mark={mark}
              setDate={setDate}
              setName={setName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
