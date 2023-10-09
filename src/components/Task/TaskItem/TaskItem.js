import React from "react";
import styles from './TaskItem.module.css';

const TaskItem=(props) =>{

    return <li className={styles['task-list']}>{props.task}</li>
}

export default TaskItem;