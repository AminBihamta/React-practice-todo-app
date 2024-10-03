import { useState } from "react";

type NewTaskProps = {
  addTask: (task: string) => void;
};

function submitNewTask(addTask: (task: string) => void, task: string) {
  if (task.length > 0) {
    addTask(task);
  }
}

function NewTask({ addTask }: NewTaskProps) {
  // Destructure addTask from props
  const [task, setTask] = useState<string>("");
  return (
    <div>
      <input
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="New Task"
        value={task}
        id="inputField"
      />
      <button
        onClick={() => {
          submitNewTask(addTask, task);
          setTask("");
        }}
        type="submit"
      >
        {" "}
        Add New Task
      </button>
    </div>
  );
}

export default NewTask;
