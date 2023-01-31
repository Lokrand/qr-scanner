import React, { FC, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface IButton {
  error?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  title: string;
}

export const Button: FC<IButton> = ({ error = false, onClick, title }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={error}
    >
      {title}
    </button>
  );
};
