import React, { ChangeEvent, FC } from "react";
import styles from "./Input.module.css";

interface IInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  placeholder: string;
  error: boolean;
}

export const Input: FC<IInput> = ({
  value,
  onChange,
  errorMessage,
  placeholder,
  error,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      {error && value.length > 0 && (
        <p className={styles.input__error}>{errorMessage}</p>
      )}
    </div>
  );
};
