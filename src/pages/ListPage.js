import "./listpage.scss";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function ListPage() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getToDoList = async () => {
      const toDoList = await getDocs(collection(db, "To-Do-List"));
      console.log(
        toDoList.docs.map((doc) => ({ id: doc.id, item: doc.data() }))
      );
      setList(
        toDoList.docs.map((doc) => ({ id: doc.id, item: doc.data().item }))
      );
    };
    getToDoList();
  }, []);
  const addItem = (value) => {
    async function storeItem() {
      try {
        const docRef = await addDoc(collection(db, "To-Do-List"), {
          item: value,
        });
        console.log("Document written with ID: ", docRef.id);
        setList([...list, { id: docRef.id, item: value }]);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    storeItem();
  };
  return (
    <main className="listpage-main">
      {/* 傳入props: addItem function */}
      <AddForm addItem={addItem} />
      {/* 傳入props: list setList*/}
      <List list={list} setList={setList} />
    </main>
  );
}

function List({ list, setList }) {
  function deleteItem(id) {
    async function removeItem() {
      await deleteDoc(doc(db, "To-Do-List", id));
    }
    removeItem();
    setList((prevList) => prevList.filter((item) => item.id != id));
  }
  const toDoList = list.map((value) => {
    return (
      <div className="list-container">
        <div key={value.id} className="todo-item">
          {value.item}
        </div>
        <button
          onClick={() => {
            deleteItem(value.id);
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
  const typeRef = useRef();
  return (
    <>
      <input ref={typeRef} className="type-area"></input>
      <button
        onClick={() => {
          addItem(typeRef.current.value);
          document.querySelector(".type-area").value = "";
        }}
        className="additem-btn"
      >
        新增紀錄
      </button>
      <hr />
    </>
  );
}
