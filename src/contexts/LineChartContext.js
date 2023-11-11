import * as React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { emptyLineChartData } from "../data/net";

export const myContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useLocalStorage("data", emptyLineChartData);

  return (
    <myContext.Provider value={{ data, setData }}>
      {children}
    </myContext.Provider>
  );
};
