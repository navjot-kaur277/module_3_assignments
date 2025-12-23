import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Component4 from "./Component4";

const Component3 = () => {
  const { a, b } = useContext(AppContext);
  return (
    <div className="card consumer">
      <h3>Component 3</h3>
      <div className="code-block">
        <h4>This is prop a: {a}</h4>
        <h4>This is prop b: {b}</h4>
      </div>
      <div className="tree-line">
        <Component4 />
      </div>
    </div>
  );
};
export default Component3;
