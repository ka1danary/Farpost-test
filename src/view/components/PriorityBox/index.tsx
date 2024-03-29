import React from "react";
import styles from "./index.module.scss";

interface Props {
  color: string[];
}

export const PriorityBox: React.FC<Props> = ({ color }) => {
  const setColor = (priority: string) => {
    return (
      <svg
        key={priority}
        width="15.000000"
        height="15.000000"
        viewBox="0 0 15 15"
        fill="none"
      >
        <circle
          id="Ellipse 2"
          cx="7.500000"
          cy="7.500000"
          r="7.500000"
          fill={
            priority === "High"
              ? "#FF9B9B"
              : priority === "Medium"
                ? "#FFED48"
                : priority === "Low"
                  ? "#60D5A4"
                  : "#D3D3D3"
          }
          fillOpacity="1.000000"
        />
      </svg>
    );
  };

  return (
    <div className={styles.PriorityBox}>
      {color.map((priority, index) => (
        <div key={index}>{setColor(priority)}</div>
      ))}
      {color}
    </div>
  );
};
