import React from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

export default function TodoApp() {
  return (
    <>
      <ToDoInput />
      <ToDoList />
    </>
  );
}
