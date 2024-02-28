import * as React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { emptyLineChartData } from "../data/net";

export const myContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [netData, setNetData] = useLocalStorage("netData", emptyLineChartData);
  const currentChef = "";

  return (
    <myContext.Provider
      value={{
        darkMode,
        setDarkMode,
        netData,
        setNetData,
        currentChef,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
