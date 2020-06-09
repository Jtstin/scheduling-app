import React, { useState, useEffect } from "react";
import Task from "./Task";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [alreadyRan, setAlreadyRan] = useState(false);
  useEffect(() => {
    if (!alreadyRan) {
      fetch("http://localhost:3000/api/tasks") //fetches data from api
        .then((response) => response.json())
        .then((data) => setTasks(data.tasks));
      console.log("fetch data");
    }
    setAlreadyRan(true);
  }, [alreadyRan]);

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
        {tasks.map((task, index) => (
          <Task
            key={`task-${index}`}
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
