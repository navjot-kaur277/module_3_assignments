import React from "react";
import Component3 from "./component3";

const Component2 = ({ a, b, c, d, e, f }) => {
  return (
    <div className="card comp-2">
      <div className="card-header">
        Component 2<span className="badge-warning">(Uses No Props)</span>
      </div>
      {/* Receives all, uses none, passes all to Component 3 */}
      <Component3 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
};

export default Component2;
