import React, { ChangeEvent, FC } from "react";
import styles from "./InputRange.module.css";

interface IInputRange {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
}

export const InputRange: FC<IInputRange> = ({ onChange, min=0, max=100 }) => {
  return (
    <input
      type="range"
      className={styles.inputRange}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
};
