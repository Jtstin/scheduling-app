import React from "react";

interface TaskProperties {
  name: string;
  dueBy: string;
  importance: string;
}
const Task = (props: TaskProperties) => {
  const { name, dueBy, importance } = props;
  return (
    <div className="task-row">
      <div className="task-name">{name}</div>
      <div className="task-due-by">{dueBy}</div>
      <div className="task-importance">{importance}</div>
    </div>
  );
};

export default Task;
