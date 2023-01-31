import React, { FC, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface IButton {
  error: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<IButton> = ({ error, onClick }) => {
  return (
    <button
      className={
        error
          ? `${styles.button} ${styles.button_disabled}`
          : styles.button
      }
      onClick={onClick}
      disabled={error && true}
    >
      Generate
    </button>
  );
};
