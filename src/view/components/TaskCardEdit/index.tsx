import { useState } from "react";
import { useFarpostStore } from "../../../data/stores/useFarpostStore";
import { Input } from "../Input";
import styles from "./index.module.scss";
import { ButtonEdit } from "../buttons/ButtonEdit";
import { CustomSelect } from "../CustomSelect";

interface Props {}

export const TaskCardEdit: React.FC<Props> = () => {

  const [ id, findTask, updateTask] = useFarpostStore((state) => [
    state.id,
    state.findTask,
    state.updateTask
  ]);

  const task = findTask(id)

  const [name, setName] = useState(task.name)
  const [title, setTitle] = useState(task.name)
  const [priority, setPriority] = useState(task.name)
  const [mark, setMark] = useState(task.name)

  return (
    <div className={styles.TaskCardView}>
      <div className={styles.TaskCardViewContent}>
        <div className={styles.TaskCardViewContentTitle}></div>
        <div className={styles.TaskCardViewContentBox}>
          <div className={styles.TaskCardViewContentBoxName}>
            <p>Название задачи</p> 
            <Input newValue={name} set={setName}></Input>
          </div>
          <div className={styles.TaskCardViewContentBoxName}>
            
            <CustomSelect
                    title={"Приоритет"}
                    values={["Low", "Medium", "Hight"]}
                    set={setPriority}
                  />
                
                  <CustomSelect
                    title={"Отметка"}
                    values={["Development", "Designed", "Research"]}
                    set={setMark}
                  />
          </div>
          
          <div className={styles.TaskCardViewContentBoxName}>
            <p>Описание</p>
            <Input newValue={title} set={setTitle}></Input>
          </div>
        </div>
        <div onClick={() => {
            updateTask(task.id, name, title, priority, mark)
        }}>
          <ButtonEdit href="/view" title="Сохранить" type="calm" />
        </div>
      </div>
    </div>
  );
};
