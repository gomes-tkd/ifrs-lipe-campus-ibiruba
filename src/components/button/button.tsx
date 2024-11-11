import React from "react";
import styles from "./button.module.css";

export default function Button({ label }: { label: string }) {
  return <button className={styles.button}>{label}</button>;
}
