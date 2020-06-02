import React from "react";
import { render } from "react-dom";
import Tasks from "./Tasks";

const App = () => {
  return (
    <div className="container">
      <div className="sch-header">header</div>
      <div className="sch-body">
        <div className="main-content-side"></div>
        <Tasks />
        <div className="main-content-side"></div>
      </div>
      <div className="sch-footer">footer</div>
    </div>
  );
};

render(<App />, document.getElementById("app"));
