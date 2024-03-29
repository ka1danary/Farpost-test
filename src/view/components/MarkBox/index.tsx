import React from "react";
import styles from "./index.module.scss";

interface Props {
  values: string;
}

const PriorityColors = {
  Designed: "#da007841",
  Development: "#B3DCD8",
  Research: "#ff910075",
};

const MarkBox: React.FC<Props> = ({ values }) => {
  const setColor = (color: string) => {
    if (color === "Design") {
      return PriorityColors.Designed;
    } else if (color === "Development") {
      return PriorityColors.Development;
    } else if (color === "Research") {
      return PriorityColors.Research;
    }
  };

  return (
    <div className={styles.Box}>
      <div
        className={styles.BoxValue}
        style={{
          backgroundColor: setColor(values),
          color: "black",
          fontWeight: "300",
        }}
      >
        {values}
      </div>
    </div>
  );
};

export default MarkBox;
