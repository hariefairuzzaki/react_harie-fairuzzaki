import React, { useState } from "react";
import data from "../data.json";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

export default function TodoApp() {
  const [datas, setDatas] = useState(data);

  const handleDelete = (id) => {
    let deleted = datas.filter((task) => task.id !== id);
    setDatas(deleted);
  };

  const addTodo = (userInput) => {
    let newTodo = [...datas];
    newTodo = [...newTodo, { id: datas.length + 1, title: userInput, completed: false }];
    setDatas(newTodo);
  };

  const handleCheckbox = (item) => {
    let todos = datas.map((el) => (el.id === item.id ? { ...el, completed: !el.completed } : el));
    setDatas(todos);
  };

  return (
    <>
      <ToDoInput addTodo={addTodo} />
      <ToDoList todoList={datas} handleDelete={handleDelete} handleCheckbox={handleCheckbox} />
    </>
  );
}
