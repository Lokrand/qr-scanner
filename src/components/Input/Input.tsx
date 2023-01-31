import React, { ChangeEvent, FC } from "react";
import styles from "./Input.module.css";

interface IInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  errorMessage: string;
  placeholder: string;
}

export const Input: FC<IInput> = ({ value, error, onChange, errorMessage, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      {error && <p className={styles.input__error}>{errorMessage}</p>}
    </div>
  );
};
