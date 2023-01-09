import "./listpage.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

export default function ListPage() {
  const [list, setList] = useState([]);
  const addItem = (value) => {
    const listArray = [...list, value];
    setList(listArray);
  };
  return (
    <main className="listpage-main">
      {/* 傳入props: addItem function */}
      <AddForm addItem={addItem} />
      {/* 傳入props: list */}
      <List list={list} setList={setList} />
    </main>
  );
}

function List({ list, setList }) {
  function deleteItem(index) {
    setList(
      list.filter((item, i) => {
        return i !== index;
      })
    );
  }
  const toDoList = list.map((value, index) => {
    return (
      <div className="list-container">
        <div key={index} className="todo-item">
          {value}
        </div>
        <button
          onClick={() => {
            deleteItem(index);
          }}
          className="delete-btn"
        >
          刪除
        </button>
      </div>
    );
  });
  return (
    <>
      {toDoList}
      <button className="back-btn">
        <Link to="/">返回首頁</Link>
      </button>
    </>
  );
}
function AddForm({ addItem }) {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="type-area"
      ></input>
      <button
        onClick={() => {
          addItem(value);
        }}
        className="additem-btn"
      >
        新增紀錄
      </button>
      <hr />
    </>
  );
}
