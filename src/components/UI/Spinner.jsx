import React from "react";
import styles from "./Spinner.module.css";

export default function Spinner({ ...props }) {
  return <div {...props} className={styles.spinner}></div>;
}
