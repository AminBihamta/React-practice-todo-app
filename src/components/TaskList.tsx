import React from "react";

type TaskListProps = {
  TaskListItems: string[];
  deleteTask: (task: string) => void;
};

function TaskList({ TaskListItems, deleteTask }: TaskListProps) {
  return (
    <div className="taskListWrapper">
      <div className="divider">
        <div></div>
      </div>
      <div className="taskList">
        {TaskListItems.map((task, index) => (
          <div className="todoItem" key={index}>
            {task}
            <div
              className="iconWrapper"
              onClick={() => {
                deleteTask(task);
              }}
            >
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12v15c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V12H6zm6 13a1 1 0 0 1-2 0v-9a1 1 0 0 1 2 0v9zm5 0a1 1 0 0 1-2 0v-9a1 1 0 0 1 2 0v9zm5 0a1 1 0 0 1-2 0v-9a1 1 0 0 1 2 0v9zM27 6h-6V5c0-1.654-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3v1H5c-1.103 0-2 .897-2 2v1a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V8c0-1.103-.897-2-2-2zM13 5c0-.551.449-1 1-1h4c.551 0 1 .449 1 1v1h-6V5z"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
