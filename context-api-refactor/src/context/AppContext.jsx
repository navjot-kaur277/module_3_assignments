import React, { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const data = {
    a: "React",
    b: "Context",
    c: "API",
    d: "Solves",
    e: "Props",
    f: "Drilling",
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
