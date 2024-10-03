import { useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask";

function App() {
  const [tasks, setTasks] = useState<String[]>([]);

  const addTask = (newTask: string) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return <NewTask addTask={addTask} />;
}

export default App;
