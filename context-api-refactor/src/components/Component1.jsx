import React from "react";
import Component2 from "./Component2";
import { AppContextProvider } from "../context/AppContext";

const Component1 = () => {
  return (
    <AppContextProvider>
      <div className="card root">
        <h2>Component 1</h2>
        <p>I provide the context. I pass NO props to children.</p>
        <div className="tree-line">
          <Component2 />
        </div>
      </div>
    </AppContextProvider>
  );
};
export default Component1;
