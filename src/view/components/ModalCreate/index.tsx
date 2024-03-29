import React, { useState } from "react";
import { format } from "@formkit/tempo";

import styles from "./index.module.scss";

import { ButtonCreate } from "../buttons/ButtonCreate";
import { Input } from "../Input";
import { CustomSelectMarks } from "../CustomSelectMarks";
import { CustomSelectPriority } from "../CustomSelectPriority";
import MarkBox from "../MarkBox";
import { PriorityBox } from "../PriorityBox";
import { Textarea } from "../Textarea";

interface ModalCreate {
  setActive: (active: boolean) => void;
}

export const ModalCreate: React.FC<ModalCreate> = ({ setActive }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<string[]>([]);
  const [mark, setMark] = useState<string[]>([]);

  const resetValues = () => {
    setName("");
    setTitle("");
    setPriority([]);
    setMark([]);
  };

  return (
    <div className={styles.ModalCreate} onClick={() => setActive(false)}>
      <div
        className={styles.ModalCreateContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className={styles.ModalCreateContentTitle}>
            <div className={styles.ModalCreateContentDataElementSvg}>
              {" "}
              <svg
                width="18.000000"
                height="18.000000"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  id="path"
                  d="M2 16L3.42 16L13.2 6.22L11.77 4.79L2 14.57L2 16ZM0 18L0 13.75L13.2 0.57C13.4 0.39 13.62 0.25 13.86 0.14C14.1 0.04 14.35 0 14.62 0C14.89 0 15.15 0.04 15.4 0.14C15.65 0.25 15.86 0.39 16.04 0.6L17.42 2C17.62 2.18 17.77 2.39 17.86 2.64C17.95 2.89 18 3.14 18 3.39C18 3.66 17.95 3.92 17.86 4.16C17.77 4.4 17.62 4.62 17.42 4.82L4.25 18L0 18ZM16 3.39L14.6 2L16 3.39ZM12.47 5.52L11.77 4.79L13.2 6.22L12.47 5.52Z"
                  fill="#000000"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
              Новая задача{" "}
            </div>
          </div>
          <div className={styles.ModalCreateContentData}>
            <div className={styles.ModalCreateContentDataElement}>
              <div className={styles.ModalCreateContentDataElementSvg}>
                {" "}
                <svg
                  width="18.000000"
                  height="20.000000"
                  viewBox="0 0 18 20"
                  fill="none"
                >
                  <path
                    id="path"
                    d="M2 20C1.45 20 0.97 19.8 0.58 19.41C0.19 19.02 0 18.54 0 18L0 4C0 3.45 0.19 2.97 0.58 2.58C0.97 2.19 1.45 2 2 2L3 2L3 0L5 0L5 2L13 2L13 0L15 0L15 2L16 2C16.54 2 17.02 2.19 17.41 2.58C17.8 2.97 18 3.45 18 4L18 18C18 18.54 17.8 19.02 17.41 19.41C17.02 19.8 16.54 20 16 20L2 20ZM2 18L16 18L16 8L2 8L2 18ZM2 6L16 6L16 4L2 4L2 6ZM2 4L2 6L2 4ZM9 12C8.71 12 8.47 11.9 8.28 11.71C8.09 11.52 8 11.28 8 11C8 10.71 8.09 10.47 8.28 10.28C8.47 10.09 8.71 10 9 10C9.28 10 9.52 10.09 9.71 10.28C9.9 10.47 10 10.71 10 11C10 11.28 9.9 11.52 9.71 11.71C9.52 11.9 9.28 12 9 12ZM5 12C4.71 12 4.47 11.9 4.28 11.71C4.09 11.52 4 11.28 4 11C4 10.71 4.09 10.47 4.28 10.28C4.47 10.09 4.71 10 5 10C5.28 10 5.52 10.09 5.71 10.28C5.9 10.47 6 10.71 6 11C6 11.28 5.9 11.52 5.71 11.71C5.52 11.9 5.28 12 5 12ZM13 12C12.71 12 12.47 11.9 12.28 11.71C12.09 11.52 12 11.28 12 11C12 10.71 12.09 10.47 12.28 10.28C12.47 10.09 12.71 10 13 10C13.28 10 13.52 10.09 13.71 10.28C13.9 10.47 14 10.71 14 11C14 11.28 13.9 11.52 13.71 11.71C13.52 11.9 13.28 12 13 12ZM9 16C8.71 16 8.47 15.9 8.28 15.71C8.09 15.52 8 15.28 8 15C8 14.71 8.09 14.47 8.28 14.28C8.47 14.09 8.71 14 9 14C9.28 14 9.52 14.09 9.71 14.28C9.9 14.47 10 14.71 10 15C10 15.28 9.9 15.52 9.71 15.71C9.52 15.9 9.28 16 9 16ZM5 16C4.71 16 4.47 15.9 4.28 15.71C4.09 15.52 4 15.28 4 15C4 14.71 4.09 14.47 4.28 14.28C4.47 14.09 4.71 14 5 14C5.28 14 5.52 14.09 5.71 14.28C5.9 14.47 6 14.71 6 15C6 15.28 5.9 15.52 5.71 15.71C5.52 15.9 5.28 16 5 16ZM13 16C12.71 16 12.47 15.9 12.28 15.71C12.09 15.52 12 15.28 12 15C12 14.71 12.09 14.47 12.28 14.28C12.47 14.09 12.71 14 13 14C13.28 14 13.52 14.09 13.71 14.28C13.9 14.47 14 14.71 14 15C14 15.28 13.9 15.52 13.71 15.71C13.52 15.9 13.28 16 13 16Z"
                    fill="#2F2F2F"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                </svg>
                <div>Дата</div>
              </div>
              {format(new Date(), { date: "full" })}
            </div>
            <div className={styles.ModalCreateContentDataElement}>
              <div className={styles.ModalCreateContentDataElementSvg}>
                {" "}
                Название
              </div>
              <Input
                set={setName}
                placeholder={"Название задачи"}
                newValue={name}
                width="40vw"
              />
            </div>
            <div className={styles.ModalCreateContentDataElement}>
              <div className={styles.ModalCreateContentDataElementSvg}>
                Описание
              </div>
              <Textarea
                set={setTitle}
                newValue={title}
                width="40vw"
                placeholder={"Описание задачи"}
              />
            </div>
            <hr
              style={{
                backgroundColor: "#c9b6ef",
                height: "1px",
                border: "none",
                width: "50vw",
              }}
            />
            <div className={styles.ModalCreateContentDataElementSelect}>
              <div className={styles.ModalCreateContentDataElementSelectBox}>
                <div>
                  <CustomSelectPriority
                    values={["Low", "Medium", "High"]}
                    setPriority={(temp) => setPriority(temp)}
                    priority={priority}
                  />
                </div>
                <div className={styles.ModalCreateContentDataElementSelectMark}>
                  <CustomSelectMarks
                    values={["Development", "Design", "Research"]}
                    setMarks={setMark}
                    marks={mark}
                  />
                </div>
                <span>
                  {priority.map((el, index) => (
                    <div
                      key={index}
                      style={{ marginLeft: "10px", height: "0px" }}
                    >
                      <PriorityBox color={[el]} />
                    </div>
                  ))}
                  {mark.map((el, index) => (
                    <div
                      key={index}
                      style={{ marginLeft: "10px", height: "0px" }}
                    >
                      <MarkBox values={el} />
                    </div>
                  ))}
                </span>
              </div>

              <button
                className={styles.ModalCreateContentDataElementButton}
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
          </div>
          <div className={styles.ModalCreateContentButton}>
            <ButtonCreate
              setVision={setActive}
              name={name}
              title={title}
              priority={priority}
              mark={mark}
              setName={setName}
              clean={resetValues}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
