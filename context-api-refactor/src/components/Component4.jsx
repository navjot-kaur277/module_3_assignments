import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Component5 from "./Component5";

const Component4 = () => {
  const { c, d } = useContext(AppContext);
  return (
    <div className="card consumer">
      <h3>Component 4</h3>
      <div className="code-block">
        <h4>This is prop c: {c}</h4>
        <h4>This is prop d: {d}</h4>
      </div>
      <div className="tree-line">
        <Component5 />
      </div>
    </div>
  );
};
export default Component4;
