import React, { useRef } from "react";
import Card from "../../UI/Card/Card";
import styles from "./TaskForm.module.css";

const TaskForm = (props) => {
  const addInputRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    props.onNewTask(addInputRef.current.value);
  };

  return <form className={styles["controls"]} onSubmit={submitHandler}>
    <input type="text" name="addTask" id="addTask" ref={addInputRef} />
    <button type="submit">Add Task</button>
  </form>;
};

export default TaskForm;
