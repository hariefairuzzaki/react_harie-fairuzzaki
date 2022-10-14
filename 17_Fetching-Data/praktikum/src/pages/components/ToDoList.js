import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedTodos, retrievedTodos, updatedTodos } from "../../store/features/todoSlice";
import { Button, Container, Form, Table } from "react-bootstrap";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const todos = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrievedTodos());
  }, [dispatch]);

  const handleCheckbox = async ({ id, completed }) => {
    try {
      await dispatch(updatedTodos({ id, completed })).unwrap();
      await dispatch(retrievedTodos()).unwrap();
    } catch (err) {
      console.error("Failed to save the todo: ", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deletedTodos(id)).unwrap();
      await dispatch(retrievedTodos()).unwrap();
    } catch (err) {
      console.error("Failed to save the todo: ", err);
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Table style={{ width: "495px" }}>
          {todos.data.todos?.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>
                  <Form>
                    <Form.Check
                      label={item.completed ? <span className={styles.strike}>{item.title}</span> : item.title}
                      defaultChecked={item.completed}
                      onClick={() => handleCheckbox({ id: item.id, completed: !item.completed })}
                    />
                  </Form>
                </td>
                <td className="text-end">
                  <Button
                    size="sm"
                    variant="outline-danger"
                    className="rounded-5"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </>
  );
}
