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
    <div className="newTaskWrapper">
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
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 512 512"
        >
          <path
            d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"
            fill="#ffffff"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default NewTask;
