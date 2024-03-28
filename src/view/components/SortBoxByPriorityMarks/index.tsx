import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import CustomCheckbox from "../../CustomCheckbox";
import { useFarpostStore } from "../../../data/stores/useFarpostStore";
import CustomCheckboxPriority from "../../CustomCheckboxPriority";

interface Props {}

// const PriorityColors = {
//   Low: "#60D5A4",
//   Medium: "#FFED48",
//   High: "#FF9B9B",
// };

export const SortBoxByPriorityMarks: React.FC<Props> = () => {
  const handleButtonClick = (label: string) => {
    console.log(`Clicked: ${label}`);
  };

  const [arrayMarks, setarrayMarks] = useState<string[]>([]);
  const [arrayPriority, setArrayPriority] = useState<string[]>([]);

  const [chckedPriority, setCheckedPriority] = useState<boolean[]>([false, false, false])

  const  helper = () => {
    if (chckedPriority.includes(true)) {
      chckedPriority.find( el => el === true)
    }
  }

  const [propertiesForFilter, setPropertiesForFilter] = useFarpostStore(state => [
    state.propertiesForFilter, state.setPropertiesForFilter
  ])

  useEffect(() => {
    console.log("Новый массив фильтров " + arrayMarks);
    setPropertiesForFilter([...arrayMarks, ...arrayPriority])

  }, [arrayMarks, arrayPriority]);

  return (
    <div className={styles.SortBox}>
      <div>
        <div className={styles.SortBoxTitle}>Приоритет</div>
        <div className={styles.SortBoxContent}>
          <button
            className={styles.SortBoxContentButtonSort}
            onClick={() => handleButtonClick("Low")}
          >
            <div className={styles.SortBoxContentButtonSortSVG}></div>
            <CustomCheckboxPriority
              title="Low"
              setValues={setArrayPriority}
              values={arrayPriority}
              checked={chckedPriority[0]}
              
            />
          </button>
          <button
            className={styles.SortBoxContentButtonSort}
            onClick={() => handleButtonClick("Medium")}
          >
            <div className={styles.SortBoxContentButtonSortSVG}></div>
            <CustomCheckboxPriority
              title="Medium"
              setValues={setArrayPriority}
              values={arrayPriority}
              checked={chckedPriority[1]}
            />
          </button>
          <button
            className={styles.SortBoxContentButtonSort}
            onClick={() => handleButtonClick("High")}
          >
            <div className={styles.SortBoxContentButtonSortSVG}></div>
            <CustomCheckboxPriority
              title="High"
              setValues={setArrayPriority}
              values={arrayPriority}
              checked={chckedPriority[2]}
            />
          </button>

          <div className={styles.SortBoxTitle}>Метка</div>
          <div className={styles.SortBoxContent}>
            <button
              className={styles.SortBoxContentButtonSort}
              onClick={() => handleButtonClick("Development")}
            >
              <div className={styles.SortBoxContentButtonSortSVG}></div>
              <CustomCheckbox
                title="Development"
                setValues={setarrayMarks}
                values={arrayMarks}
              />
            </button>
            <button
              className={styles.SortBoxContentButtonSort}
              onClick={() => handleButtonClick("Design")}
            >
              <div className={styles.SortBoxContentButtonSortSVG}></div>
              <CustomCheckbox
                title="Design"
                setValues={setarrayMarks}
                values={arrayMarks}
              />
            </button>
            <button
              className={styles.SortBoxContentButtonSort}
              onClick={() => handleButtonClick("Research")}
            >
              <div className={styles.SortBoxContentButtonSortSVG}></div>
              <CustomCheckbox
                title="Research"
                setValues={setarrayMarks}
                values={arrayMarks}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};