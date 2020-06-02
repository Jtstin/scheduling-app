import React from "react";
import Task from "./Task";

const Tasks = () => {
  return (
    <div className="main-content">
      <div className="main-content-header">
        <div className="buttons">
          <button>Save</button>
        </div>
        <div className="buttons">
          <button>Add</button>
        </div>
      </div>
      <div>
        <Task />
      </div>
    </div>
  );
};

export default Tasks;
