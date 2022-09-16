import React, { useState } from "react";
import styles from "./ToDoInput.module.css";

export default function TodoInput({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodos = userInput ? addTodo(userInput) : alert("To Do Kosong!");
    setUserInput("");
    return newTodos;
  };

  return (
    <>
      <div className="container">
        <p className={styles.text}>todos</p>
        <form className="d-flex justify-content-center mt-5 mb-3" onSubmit={handleSubmit}>
          <input className="form-control me-2 rounded-5" type="text" placeholder="Add todo..." style={{ width: "400px" }} onChange={handleChange} value={userInput} />
          <button className="btn btn-outline-primary rounded-5">Submit</button>
        </form>
      </div>
    </>
  );
}
