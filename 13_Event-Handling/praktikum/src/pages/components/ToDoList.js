import React from "react";
import styles from "./ToDoList.module.css";
import ToDoChecbox from "./ToDoChecbox";

export default function ToDoList({ todoList, handleDelete, handleCheckbox }) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <table className="table" style={{ width: "495px" }}>
          {todoList.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>
                  <div className="form-check">
                    <ToDoChecbox onClick={() => handleCheckbox(item)} defaultChecked={item.completed} />
                    <label className={item.completed ? styles.strike : ""}>{item.title}</label>
                  </div>
                </td>
                <td className="text-end">
                  <button
                    className="btn btn-sm btn-outline-danger rounded-5"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
