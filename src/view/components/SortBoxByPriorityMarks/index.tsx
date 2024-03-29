import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import CustomCheckbox from "../CustomCheckbox";
import { useFarpostStore } from "../../../data/stores/useFarpostStore";
import CustomCheckboxPriority from "../CustomCheckboxPriority";

interface Props {}

export const SortBoxByPriorityMarks: React.FC<Props> = () => {
  const handleButtonClick = (label: string) => {
    console.log(`Clicked: ${label}`);
  };

  const [arrayMarks, setarrayMarks] = useState<string[]>([]);
  const [arrayPriority, setArrayPriority] = useState<string[]>([]);

  const [propertiesForFilter, setPropertiesForFilter] = useFarpostStore(
    (state) => [state.propertiesForFilter, state.setPropertiesForFilter]
  );

  useEffect(() => {
    console.log("Новый массив фильтров " + arrayMarks);
    setPropertiesForFilter([...arrayMarks, ...arrayPriority]);
  }, [arrayMarks, arrayPriority]);

  return (
    <div className={styles.SortBox}>
      
        <div className={styles.SortBoxContainer}>
          <div>
            <span className={styles.SortBoxContainerTitle}>Приоритет</span>
            <div className={styles.SortBoxContainerContent}>
              <button
                className={styles.SortBoxContainerContentButtonSort}
                onClick={() => handleButtonClick("Low")}
              >
                <div className={styles.SortBoxContainerContentButtonSortSVG}></div>
                <CustomCheckboxPriority
                  title="Low"
                  setValues={setArrayPriority}
                  values={arrayPriority}
                />
              </button>
              <button
                className={styles.SortBoxContainerContentButtonSort}
                onClick={() => handleButtonClick("Medium")}
              >
                <div className={styles.SortBoxContainerContentButtonSortSVG}></div>
                <CustomCheckboxPriority
                  title="Medium"
                  setValues={setArrayPriority}
                  values={arrayPriority}
                />
              </button>
              <button
                className={styles.SortBoxContainerContentButtonSort}
                onClick={() => handleButtonClick("High")}
              >
                <div className={styles.SortBoxContentButtonSortSVG}></div>
                <CustomCheckboxPriority
                  title="High"
                  setValues={setArrayPriority}
                  values={arrayPriority}
                />
              </button>
            </div>
          </div>

          <div className={styles.SortBoxContainer}>
            <div>
              <span className={styles.SortBoxContainerTitle} >Метка</span>
              <div className={styles.SortBoxContainerContent}>
                <button
                  className={styles.SortBoxContainerContentButtonSort}
                  onClick={() => handleButtonClick("Development")}
                >
                  <div className={styles.SortBoxContainerContentButtonSortSVG}></div>
                  <CustomCheckbox
                    title="Development"
                    setValues={setarrayMarks}
                    values={arrayMarks}
                  />
                </button>
                <button
                  className={styles.SortBoxContainerContentButtonSort}
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
                  className={styles.SortBoxContainerContentButtonSort}
                  onClick={() => handleButtonClick("Research")}
                >
                  <div className={styles.SortBoxContainerContentButtonSortSVG}></div>
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
      </div>
  );
};
