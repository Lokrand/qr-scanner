import React from "react";
import logo from "./logo.svg";
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
