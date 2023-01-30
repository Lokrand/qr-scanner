import React, { useEffect, ChangeEventHandler, useState, FC } from "react";
import { Cross } from "../../../icons/Cross/Cross";
import styles from "./Input.module.css";

export const Input: FC = () => {
  const [value, setValue] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === "Escape") {
        setValue("");
      }
    }
    if (value) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [value]);
  
  return (
    <div className={styles.input}>
      <input
        className={styles.input__input}
        value={value}
        onChange={onChange}
        placeholder="Enter your e-mail"
      />
      {value && <Cross onClick={() => setValue("")} />}
    </div>
  );
};
