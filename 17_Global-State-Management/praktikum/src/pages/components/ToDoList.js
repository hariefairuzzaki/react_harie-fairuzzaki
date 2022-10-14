import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoCheckbox, todoDeleted } from "../../store/features/todoSlice";
import { Button, Container, Form, Table } from "react-bootstrap";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const todos = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Table style={{ width: "495px" }}>
          {todos.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>
                  <Form>
                    <Form.Check
                      label={item.completed ? <span className={styles.strike}>{item.title}</span> : item.title}
                      defaultChecked={item.completed}
                      onClick={() => dispatch(todoCheckbox(item.id))}
                    />
                  </Form>
                </td>
                <td className="text-end">
                  <Button
                    size="sm"
                    variant="outline-danger"
                    className="rounded-5"
                    onClick={() => {
                      dispatch(todoDeleted(item.id));
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
