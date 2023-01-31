import React, { ChangeEvent, FC } from "react";
import styles from "./InputRange.module.css";

interface IInputRange {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputRange: FC<IInputRange> = ({ onChange }) => {
  return (
    <input
      type="range"
      className={styles.inputRange}
      min={256}
      max={window.screen.availWidth}
      onChange={onChange}
    />
  );
};
