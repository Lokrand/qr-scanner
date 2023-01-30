import { FC } from "react";
import styles from "./Cross.module.css";

interface ICross {
  onClick: VoidFunction;
}

export const Cross: FC<ICross> = ({ onClick }) => {
  return (
    <div className={styles.cross} onClick={onClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6668 16.6668L3.3335 3.3335M16.6668 3.3335L3.3335 16.6668"
          stroke="#83828F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
