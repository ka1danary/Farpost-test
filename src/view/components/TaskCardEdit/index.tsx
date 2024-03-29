import { useState } from "react";

import { useFarpostStore } from "../../../data/stores/useFarpostStore";
import { Input } from "../Input";
import styles from "./index.module.scss";
import { ButtonEdit } from "../buttons/ButtonLink";

import { CustomSelectMarks } from "../CustomSelectMarks";
import { CustomSelectPriority } from "../CustomSelectPriority";
import { Textarea } from "../Textarea";
import { PriorityBox } from "../PriorityBox";
import MarkBox from "../MarkBox";

interface Props {}

export const TaskCardEdit: React.FC<Props> = () => {
  const [id, findTask, updateTask] = useFarpostStore((state) => [
    state.id,
    state.findTask,
    state.updateTask,
  ]);

  const task = findTask(id);

  const [name, setName] = useState(task.name);
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [mark, setMark] = useState(task.mark);

  const resetValues = () => {
    setPriority([]);
    setMark([]);
  };
  return (
    <div className={styles.TaskCardView}>
      <div className={styles.TaskCardViewContent}>
        <div className={styles.TaskCardViewContentTitle}></div>
        <div className={styles.TaskCardViewContentBox}>
          <div className={styles.TaskCardViewContentBoxName}>
            <p style={{ marginBottom: "20px" }}>Название задачи</p>
            <Input
              newValue={name}
              set={setName}
              placeholder="..."
              width="45vw"
            ></Input>
          </div>
          <div className={styles.TaskCardViewContentBoxNameSelect}>
            <CustomSelectPriority
              values={["Low", "Medium", "High"]}
              setPriority={setPriority}
              priority={priority}
            />

            <CustomSelectMarks
              values={["Development", "Design", "Research"]}
              setMarks={setMark}
              marks={mark}
            />
          </div>
          <div className={styles.TaskCardViewContentBoxSelectors}>
            {priority.map((el, index) => (
              <PriorityBox color={[el]} key={index} />
            ))}
            {mark.map((el, index) => (
              <MarkBox values={el} key={index} />
            ))}
            <button
              className={styles.TaskCardViewContentBoxSelectorsClean}
              onClick={() => {
                resetValues();
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
              <span>Очистить</span>
            </button>
          </div>
          <hr
            style={{
              backgroundColor: "#c9b6ef",
              height: "1px",
              border: "none",
              width: "47vw",
            }}
          />
          <div
            className={styles.TaskCardViewContentBoxName}
            style={{ marginTop: "30px" }}
          >
            <p style={{ marginBottom: "20px" }}>Описание</p>
            <Textarea
              newValue={title}
              set={setTitle}
              placeholder="..."
              width="45vw"
              height="10vh"
            ></Textarea>
          </div>
        </div>

        <div
          className={styles.TaskCardViewContentButton}
          onClick={() => {
            updateTask(task.id, name, title, priority, mark);
          }}
        >
          <ButtonEdit href="/view" title="Сохранить" type="calm" />
        </div>
      </div>
    </div>
  );
};
