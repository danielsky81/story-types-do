import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasks from "./components/Tasks";
import tasks from './data/tasks'
import BootstrapModal from "./components/BootstrapModal";

function App() {
  return (
    <>
      <Header />
      <BootstrapModal />
      <Tasks todos={tasks}/>
    </>
  );
}

export default App;
