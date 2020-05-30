import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <div className="sch-header">header</div>
      <div className="sch-body">body</div>
      <div className="sch-footer">footer</div>
    </div>
  );
};

render(<App />, document.getElementById("app"));
