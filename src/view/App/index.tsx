import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./index.module.scss";

import { MainPage } from "../components/pages/MainPage";
import { ViewPage } from "../components/pages/ViewPage";
import { EditPage } from "../components/pages/EditPage";

export const App: React.FC = () => {

  return (
    <div className={styles.article}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/view" element={<ViewPage / >} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
};
