import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";

interface Props {
  values: string[];
  setPriority: (val: string[]) => void;
}

export const CustomSelectPriority: React.FC<Props> = ({
  values,
  setPriority,
}) => {
  const [vision, setVision] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setVision(!vision);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  const root = [styles.CustomSelectDrop];

  if (vision) {
    root.push(styles.Active);
  }

  return (
    <div ref={selectRef} className={styles.CustomSelect}>
      <div
        className={styles.CustomSelectPreview}
        onClick={() => {
          setVision(!vision);
        }}
      >
        <button className={styles.CustomSelectPreviewContent}>
          <div>Приоритет</div>
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
              setVision(false);
              setPriority([val]);
            }}
          >
            <button>{val}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
