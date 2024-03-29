import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";

interface Props {
  values: string[];
  setMarks: (val: string[]) => void;
  marks: string[];
}

export const CustomSelectMarks: React.FC<Props> = ({
  values,
  setMarks,
  marks,
}) => {

  
  const [vision, setVision] = useState(true);

  useEffect(() => {
    setVision(false)
  }, [])
  
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
          <div>Метка</div>
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
              
              if (marks.includes(val)) {
                setMarks(marks.filter((item) => item !== val));
              } else {
                setMarks([...marks, val]);
              }
            }}
          >
            <button>{val}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
