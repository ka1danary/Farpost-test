import { useState } from "react";
import styles from "./index.module.scss";

interface Props {
  title?: string;
  values: string[];
  setPriority: (val: string[]) => void;
}

export const CustomSelectPriority: React.FC<Props> = ({
  title,
  values,
  setPriority,
}) => {
  const [vision, setVision] = useState(true);
  const arrayPriority: string[] = [];

  const [newTitle, setNewTitle] = useState(title);
  const root = [styles.CustomSelectDrop];

  if (vision) {
    root.push(styles.Active);
  }

  return (
    <div className={styles.CustomSelect}>
      <div
        className={styles.CustomSelectPreview}
        onClick={() => {
          setVision(!vision);
        }}
      >
        <button className={styles.CustomSelectPreviewContent}>
          <div>{newTitle}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </button>
      </div>
      <div className={root.join(" ")}>
        {values.map((val, index) => (
          <div
            key={index}
            className={styles.CustomSelectDropRow}
            onClick={() => {
              setVision(!vision);
              arrayPriority.push(val);
              setPriority(arrayPriority);
            }}
          >
            <button
              onClick={() => {
                setNewTitle(val);
              }}
            >
              {val}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
