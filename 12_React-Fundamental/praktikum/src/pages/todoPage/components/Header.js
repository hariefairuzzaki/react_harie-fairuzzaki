import React from "react";
import styles from "./Header.module.css";

export default function Header({ text }) {
  return (
    <div>
      <div className={styles.header}>
        <h1>{text}</h1>
      </div>
      <hr className={styles.hr} />
    </div>
  );
}
