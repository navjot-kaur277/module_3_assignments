import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Component6 from "./Component6";

const Component5 = () => {
  const { f } = useContext(AppContext);
  return (
    <div className="card consumer">
      <h3>Component 5</h3>
      <div className="code-block">
        <h4>This is prop f: {f}</h4>
      </div>
      <div className="tree-line">
        <Component6 />
      </div>
    </div>
  );
};
export default Component5;
