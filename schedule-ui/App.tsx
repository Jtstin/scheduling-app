import React from "react";
import { render } from "react-dom";
import Tasks from "./tasks";

const App = () => {
  return (
    <div className="container">
      <div className="sch-header">header</div>
      <div className="sch-body">
        <Tasks />
      </div>
      <div className="sch-footer">footer</div>
    </div>
  );
};

render(<App />, document.getElementById("app"));
