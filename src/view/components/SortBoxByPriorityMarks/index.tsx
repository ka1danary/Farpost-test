import React from "react";
import styles from "./index.module.scss";

interface Props {}

const PriorityColors = {
  Low: "#60D5A4",
  Medium: "#FFED48",
  High: "#FF9B9B",
};

export const SortBoxByPriorityMarks: React.FC<Props> = () => {
  const handleButtonClick = (label: string) => {
    console.log(`Clicked: ${label}`);
  };

  return (
    <div className={styles.SortBox}>
      <div>
        <div className={styles.SortBoxTitle}>Приоритет</div>
        <div className={styles.SortBoxContent} style={{ marginBottom: "20px" }}>
          {Object.entries(PriorityColors).map(([label, color]) => (
            <button
              key={label}
              className={styles.SortBoxContentButtonSort}
              onClick={() => handleButtonClick(label)}
            >
              <div className={styles.SortBoxContentButtonSortSVG}>
                <svg width="15.000000" height="15.000000" viewBox="0 0 15 15" fill="none">
                  <circle id="Ellipse 2" cx="7.5" cy="7.5" r="7.5" fill={color} />
                </svg>
              </div>
              <div>{label}</div>
            </button>
          ))}
        </div>
        <div className={styles.SortBoxTitle}>Метка</div>
        <div className={styles.SortBoxContent}>
          <button className={styles.SortBoxContentButtonSort} onClick={() => handleButtonClick('Developed')}>
            <div className={styles.SortBoxContentButtonSortSVG}></div>
            <div>Developed</div>
          </button>
          <button className={styles.SortBoxContentButtonSort} onClick={() => handleButtonClick('Design')}>
            <div className={styles.SortBoxContentButtonSortSVG}></div>
            <div>Design</div>
          </button>
          <button className={styles.SortBoxContentButtonSort} onClick={() => handleButtonClick('Research')}>
            <div className={styles.SortBoxContentButtonSortSVG}></div>
            <div>Research</div>
          </button>
        </div>
      </div>
    </div>
  );
};
