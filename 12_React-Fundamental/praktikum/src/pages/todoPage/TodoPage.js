import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function TodoPage({ data }) {
  return (
    <div>
      <Header text="To Do App" />
      {data.map((todo) => (
        <TodoList todo={todo} />
      ))}
    </div>
  );
}
