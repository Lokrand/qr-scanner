import React from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
      </main>
    </>
  );
};
