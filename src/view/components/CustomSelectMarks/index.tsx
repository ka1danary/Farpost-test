import { useState } from "react";

import styles from "./index.module.scss";

interface Props {
  title?: string;
  values: string[];
  setMarks: (val: string[]) => void;
  setPriority?: (val: string[]) => void;
}

export const CustomSelectMarks: React.FC<Props> = ({
  title,
  values,
  setMarks,
}) => {
  const [vision, setVision] = useState(true);
  const [arrayMarks, setArrayMarks] = useState<string[]>([]);

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
              arrayMarks.push(val);
              const uniqAndSortArray: string[] = [
                ...new Set(arrayMarks),
              ].sort();
              setArrayMarks(uniqAndSortArray);
              setMarks(uniqAndSortArray);
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
