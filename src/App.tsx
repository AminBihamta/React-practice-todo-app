import { useEffect, useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import Cookies from "js-cookie";

var emptyMessage = "";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const saveTasksToCookies = (tasks: string[]) => {
    Cookies.set("tasks", JSON.stringify(tasks), { expires: 7 }); // Save tasks as JSON, expires in 7 days
  };

  useEffect(() => {
    const savedTasks = Cookies.get("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = (newTask: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      saveTasksToCookies(updatedTasks); // Save the updated task list to cookies
      return updatedTasks; // Update state with new task list
    });

    emptyMessage = "";
  };

  const deleteTask = (taskToDelete: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task !== taskToDelete);
      saveTasksToCookies(updatedTasks); // Update cookies after deleting a task
      if (tasks.length == 0) {
        emptyMessage = "You have no active tasks";
      }
      return updatedTasks;
    });
  };

  if (tasks.length == 0) {
    emptyMessage = "You have no active tasks";
  }
  return (
    <div>
      <NewTask addTask={addTask} />
      <TaskList TaskListItems={tasks} deleteTask={deleteTask} />
      <h2>{emptyMessage}</h2>
    </div>
  );
}

export default App;
