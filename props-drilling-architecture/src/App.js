import React from "react";
import "./App.css";
import Component1 from "./components/component1";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Props Drilling Visualization</h1>
        <p>
          Notice how data travels deep into the tree, even through components
          that don't use it.
        </p>
      </header>
      <main>
        <Component1 />
      </main>
    </div>
  );
}

export default App;
