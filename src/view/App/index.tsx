import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./index.module.scss";

import { MainPage } from "../components/pages/MainPage";
import { ViewPage } from "../components/pages/ViewPage";
import { EditPage } from "../components/pages/EditPage";
import {HashLoader } from "react-spinners";

export const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className={styles.article}>
      {loading ? (
        <div className={styles.Loader}>
          <HashLoader color="#A782EC" />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      )}
    </div>
  );
};
