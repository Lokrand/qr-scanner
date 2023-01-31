import React, { ChangeEvent, FC } from "react";
import styles from "./InputLink.module.css";

interface IInputLink {
  url: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  errorMessage: string;
}

export const InputLink: FC<IInputLink> = ({
  url,
  error,
  onChange,
  errorMessage,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your link"
        value={url}
        onChange={onChange}
        className={styles.input}
      />
      {error && <p className={styles.input__error}>{errorMessage}</p>}
    </div>
  );
};
