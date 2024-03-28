import React, { useState } from "react";
import styles from "./index.module.scss";

interface Props {
  title: string;
  setValues: (value: string[]) => void;
  values: string[];
  checked: boolean;
}

const CustomCheckboxPriority: React.FC<Props> = ({
  title,
  values,
  setValues,
  checked,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button
      className={styles.CustomCheckbox}
      onClick={() => {
        handleCheckboxChange();
        console.log(isChecked);
        if (!isChecked) {
          setValues([title]);
        } else {
          setValues(values.filter((value) => value !== title));
        }
      }}
    >
      <button
        className={styles.CustomCheckboxBox}
        style={{
          backgroundColor: isChecked ? "#E9CDFF" : "#fff",
          color: isChecked ? "#fff" : "#000",
        }}
      >
        {isChecked && (
          <svg
            width="12.000000"
            height="12.000000"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              id="path"
              d="M6 12C4.34 12 2.92 11.41 1.75 10.24C0.58 9.07 0 7.65 0 6C0 4.34 0.58 2.92 1.75 1.75C2.92 0.58 4.34 0 6 0C7.65 0 9.07 0.58 10.24 1.75C11.41 2.92 12 4.34 12 6C12 7.65 11.41 9.07 10.24 10.24C9.07 11.41 7.65 12 6 12ZM6 10.28C7.18 10.28 8.19 9.86 9.03 9.03C9.86 8.19 10.28 7.18 10.28 6C10.28 4.81 9.86 3.8 9.03 2.96C8.19 2.13 7.18 1.71 6 1.71C4.81 1.71 3.8 2.13 2.96 2.96C2.13 3.8 1.71 4.81 1.71 6C1.71 7.18 2.13 8.19 2.96 9.03C3.8 9.86 4.81 10.28 6 10.28Z"
              fill="#9400A5"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        )}
      </button>
      <span>{title}</span>
    </button>
  );
};

export default CustomCheckboxPriority;
