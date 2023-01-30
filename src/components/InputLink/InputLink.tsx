import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./InputLink.module.css";

interface IInputLink {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  error: boolean;
}

export const InputLink: FC<IInputLink> = ({ url, setUrl, error }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your link"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className={styles.input}
      />
      {error && <p className={styles.input__error}>Incorrect link</p>}
    </div>
  );
};
