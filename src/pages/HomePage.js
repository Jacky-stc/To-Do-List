import "./homepage.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <header>React 練習專案</header>
      <main className="homepage-main">歡迎光臨我的頁面</main>
      <button className="start-btn">
        <Link to="/list">點此開始</Link>
      </button>
    </>
  );
}
