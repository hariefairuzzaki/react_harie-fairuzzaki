import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "../../store/features/todoSlice";
import { Button, Container, Form } from "react-bootstrap";
import styles from "./ToDoInput.module.css";

export default function TodoInput({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodos = userInput ? dispatch(todoAdded(userInput)) : alert("To Do Kosong!");
    setUserInput("");
    return newTodos;
  };

  return (
    <>
      <Container>
        <p className={styles.text}>todos</p>
        <Form className="d-flex justify-content-center mt-5 mb-3" onSubmit={handleSubmit}>
          <Form.Control
            className="me-2 rounded-5"
            type="text"
            placeholder="Add todo..."
            style={{ width: "400px" }}
            onChange={handleChange}
            value={userInput}
          />
          <Button variant="outline-primary" className="rounded-5" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
