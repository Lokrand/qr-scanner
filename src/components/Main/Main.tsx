import React from "react";
import { Input } from "../UI/Input/Input";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <section className={styles.main}>
      <h1>Enter your e-mail</h1>
      <Input />
    </section>
  );
};
