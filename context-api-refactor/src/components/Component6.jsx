import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Component6 = () => {
  const { e } = useContext(AppContext);
  return (
    <div className="card consumer end">
      <h3>Component 6</h3>
      <div className="code-block">
        <h4>This is prop e: {e}</h4>
      </div>
      <p>✅ End of Chain</p>
    </div>
  );
};
export default Component6;
