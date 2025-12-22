import React from "react";
import Component2 from "./component2";

const Component1 = () => {
  // Define the data here
  const data = {
    a: "Data A",
    b: "Data B",
    c: "Data C",
    d: "Data D",
    e: "Data E",
    f: "Data F",
  };

  return (
    <div className="card comp-1">
      <div className="card-header">Component 1 (Root)</div>
      <div className="description">
        Objective: Visualize Props Drilling from Comp1 to Comp6
      </div>
      <Component2 {...data} />
    </div>
  );
};

export default Component1;
