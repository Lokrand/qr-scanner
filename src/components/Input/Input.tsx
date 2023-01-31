import React, { ChangeEvent, FC } from "react";
import styles from "./Input.module.css";

interface IInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  placeholder: string;
  validate: (text: string) => boolean;
}

export const Input: FC<IInput> = ({
  value,
  onChange,
  errorMessage,
  placeholder,
  validate,
}) => {
  let error = false;
  if (value) error = !validate(value);
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
