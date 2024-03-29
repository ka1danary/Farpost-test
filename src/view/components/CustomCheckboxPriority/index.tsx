import React, {useState } from "react";
import styles from "./index.module.scss";
import { PriorityBox } from "../PriorityBox";

interface Props {
  title: string;
  setValues: (value: string[]) => void;
  values: string[];
}

const CustomCheckboxPriority: React.FC<Props> = ({
  title,
  values,
  setValues,

}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

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
      >
        <PriorityBox color={[title]}/>
        
      </button>
      <span></span>
    </button>
  );
};

export default CustomCheckboxPriority;
