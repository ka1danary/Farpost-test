import React from "react";
import styles from "./index.module.scss";

interface Props {
  values: string;
}

const PriorityColors = {
  Designed: "#da007841",
  Development: "#60c5d575",
  Research: "#ff910075",
};

const MarpOrPrioritySelectBox: React.FC<Props> = ({ values }) => {
  const setColor = (color: string) => {
    if (color === "Designed") {
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

export default MarpOrPrioritySelectBox;
