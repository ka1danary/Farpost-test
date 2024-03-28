import { useState } from "react";

import { useFarpostStore } from "../../../data/stores/useFarpostStore";
import { Input } from "../Input";
import styles from "./index.module.scss";
import { ButtonEdit } from "../buttons/ButtonLink";

import { CustomSelectMarks } from "../CustomSelectMarks";
import { CustomSelectPriority } from "../CustomSelectPriority";
import { Textarea } from "../Textarea";

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

  return (
    <div className={styles.TaskCardView}>
      <div className={styles.TaskCardViewContent}>
        <div className={styles.TaskCardViewContentTitle}></div>
        <div className={styles.TaskCardViewContentBox}>
          <div className={styles.TaskCardViewContentBoxName}>
            <p style={{ marginBottom: "20px" }}>Название задачи</p>
            <Input newValue={name} set={setName} placeholder="..." width="45vw"></Input>
          </div>
          <div className={styles.TaskCardViewContentBoxNameSelect}>
            <CustomSelectPriority values={['Low', 'Medium', 'High']} setPriority={setPriority} priority={priority} />
            <CustomSelectMarks values={['Development', 'Design', 'Research']} setMarks={setMark} marks={mark}/>
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
            <Textarea newValue={title} set={setTitle} placeholder="..." width="45vw" height="15vh"></Textarea>
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
