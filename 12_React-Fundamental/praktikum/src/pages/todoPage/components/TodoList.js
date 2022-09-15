import React from "react";
import styles from "./TodoList.module.css";

export default function TodoList({ todo }) {
  return (
    <>
      <button className={styles.button}>{todo.completed === true ? <span className={styles.lineThrough}>{todo.title}</span> : todo.title}</button>
    </>
  );
}
