import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createdTodos } from "../../store/features/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { Button, Container, Form } from "react-bootstrap";
import styles from "./ToDoInput.module.css";

export default function TodoInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    if (title) {
      await dispatch(createdTodos({ id: uuidv4(), title: title, completed: false })).unwrap();
      setTitle("");
    } else {
      alert("To do yang anda masukkan kosong!");
    }
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
            value={title}
            onChange={handleChange}
          />
          <Button variant="outline-primary" className="rounded-5" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
