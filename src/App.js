import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasks from "./components/Tasks";
import tasks from './data/tasks'
import BootstrapModal from "./components/BootstrapModal";
import { useState } from "react";

function App() {
  const [tasksList, setTasksList] = useState(tasks)
  const deleteTask = id => {
    setTasksList(tasksList.filter(task => task.id !== id))
  }

  const addTask = task => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    console.log(newTask);
    setTasksList([...tasksList, newTask]);
  }

  return (
    <>
      <Header />
      <BootstrapModal onAdd={addTask}/>
      {tasksList.length > 0 ? (
        <Tasks tasks={tasksList} onComplete={deleteTask}/>
      ) : (<p className="d-flex justify-content-center mt-4">All tasks completed. Please add a new one.</p>)}
    </>
  );
}

export default App;
