import React, { FC, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface IButton {
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: string;
}

export const Button: FC<IButton> = ({ disabled = false, onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
