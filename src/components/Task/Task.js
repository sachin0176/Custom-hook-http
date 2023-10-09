import React from "react";
import styles from "./Task.module.css";
import Card from "../UI/Card/Card";
import TaskItem from "./TaskItem/TaskItem";

const Task = (props) => {

    console.log(props.tasks);
  return (
    <ul className={styles.task}>
      {props.tasks.map((task) => (
        <TaskItem key={task.id} task={task.text}></TaskItem>
      ))}
    </ul>
  );
};

export default Task;
