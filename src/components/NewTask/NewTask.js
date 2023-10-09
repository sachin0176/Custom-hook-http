import React, { useState } from "react";
import TaskForm from "./TaskForm/TaskFrom";
import useHttp from "../hooks/use-http";
import Card from "../UI/Card/Card";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedTaskId = taskData.name;
    const createdTask = { id: generatedTaskId, text: taskText };

    props.onAddTask(createdTask);
  };
  const newTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-http-e231c-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask.bind(null, taskText)
    );
  };


  return <Card><TaskForm onNewTask={newTaskHandler}></TaskForm></Card>;
};

export default NewTask;
