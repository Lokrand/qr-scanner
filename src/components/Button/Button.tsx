import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./Button.module.css";

interface IButton {
  error: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const Button: FC<IButton> = ({ error, setActive }) => {
  return (
    <button
      className={
        error
          ? `${styles.button} ${styles.button_disabled}`
          : styles.button
      }
      onClick={() => setActive(true)}
      disabled={error && true}
    >
      Generate
    </button>
  );
};
