import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./InputRange.module.css";

interface IInputRange {
  setSize: Dispatch<SetStateAction<number>>;
}

export const InputRange: FC<IInputRange> = ({ setSize }) => {
  return (
    <input
      type="range"
      className={styles.inputRange}
      min={256}
      max={window.screen.availWidth}
      onChange={(e) => setSize(Number(e.target.value))}
    />
  );
};
