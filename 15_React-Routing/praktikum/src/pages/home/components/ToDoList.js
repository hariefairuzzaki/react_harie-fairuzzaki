import React from "react";
import styles from "./ToDoList.module.css";
import { Button, Container, Form, Table } from "react-bootstrap";

export default function ToDoList({ todoList, handleDelete, handleCheckbox }) {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Table style={{ width: "495px" }}>
          {todoList.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>
                  <Form>
                    <Form.Check label={item.completed ? <span className={styles.strike}>{item.title}</span> : item.title} defaultChecked={item.completed} onClick={() => handleCheckbox(item)} />
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
