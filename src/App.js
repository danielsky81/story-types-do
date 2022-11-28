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

  return (
    <>
      <Header />
      <BootstrapModal />
      <Tasks tasks={tasksList} onComplete={deleteTask}/>
    </>
  );
}

export default App;
