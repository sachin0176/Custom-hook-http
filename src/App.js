import NewTask from "./components/NewTask/NewTask";
import Task from "./components/Task/Task";
import { useEffect, useState } from "react";
import Card from "./components/UI/Card/Card";
import useHttp from "./components/hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const key in tasksObj) {
        loadedTasks.push({
          id: key,
          text: tasksObj[key].text,
        });
      }
      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: "https://react-http-e231c-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, []);


  const taskAddHandler =(task) =>{
    setTasks(prevTasks=> prevTasks.concat(task));
  }

  
  let content = <p>No task found. Start adding some!</p>;

  if (isLoading) content = <p>Loading...</p>;

  if (error) content = <p>{error}</p>;

  if (tasks.length > 0) content = <Task tasks={tasks}></Task>;

  
  return (
    <>
      <NewTask  onAddTask={taskAddHandler}/>

      <Card>{content}</Card>
    </>
  );
}

export default App;
