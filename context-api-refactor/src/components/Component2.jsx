import React from "react";
import Component3 from "./Component3";

const Component2 = () => {
  return (
    <div className="card middleman">
      <h3>Component 2</h3>
      <p>🙈 I am a middleman. I don't receive or consume any data.</p>
      <div className="tree-line">
        <Component3 />
      </div>
    </div>
  );
};
export default Component2;
