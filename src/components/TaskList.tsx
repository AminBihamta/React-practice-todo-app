import React from "react";

type TaskListProps = {
  TaskListItems: String[];
};

function TaskList({ TaskListItems }: TaskListProps) {
  return (
    <div className="taskListWrapper">
      <div className="divider">
        <div></div>
      </div>
      <div className="taskList">
        {TaskListItems.map((task, index) => (
          <div className="todoItem" key={index}>
            {task}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
