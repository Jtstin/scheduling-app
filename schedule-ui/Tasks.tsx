import React, { useState } from "react";
import Task from "./Task";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const getData = () => {
    fetch("http://localhost:3000/api/tasks") //fetches data from api
      .then((response) => response.json())
      .then((data) => setTasks(data.tasks));
  };
  const addClick = () => {
    setTasks([
      ...tasks,
      {
        name: `task ${new Date()}`,
        dueBy: new Date().toDateString(),
        importance: "medium",
      },
    ]);
  };
  return (
    <div className="main-content">
      <div className="main-content-header">
        <div className="buttons">
          <button>Save</button>
        </div>
        <button onClick={getData}>Get Data</button>
        <div className="buttons">
          <button onClick={addClick}>Add</button>
        </div>
      </div>
      <div>
        <div className="task-row">
          <div className="task-name">Name</div>
          <div className="task-due-by">Due by</div>
          <div className="task-importance">Importance</div>
        </div>
        {tasks.map((task) => (
          <Task
            name={task.name}
            dueBy={task.dueBy}
            importance={task.importance}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
