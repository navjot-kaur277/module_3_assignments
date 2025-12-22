import React from "react";
import Component4 from "./component4";

const Component3 = ({ a, b, c, d, e, f }) => {
  return (
    <div className="card comp-3">
      <div className="card-header">Component 3</div>
      <div className="card-content">
        <h4>This is prop a: {a}</h4>
        <h4>This is prop b: {b}</h4>
      </div>
      {/* Passes remaining props (c, d, e, f) forward */}
      <Component4 c={c} d={d} e={e} f={f} />
    </div>
  );
};

export default Component3;
