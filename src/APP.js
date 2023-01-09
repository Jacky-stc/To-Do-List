import "./index.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </>
  );
}
