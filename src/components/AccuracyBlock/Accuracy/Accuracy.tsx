import React, { FC } from "react";
import styles from "./Accuracy.module.css";

interface IAccuracy {
  quality: string;
  onClick: VoidFunction;
}

export const Accuracy: FC<IAccuracy> = ({ quality, onClick }) => {
  return (
    <p className={styles.accuracy} onClick={onClick}>
      {quality}
    </p>
  );
};


