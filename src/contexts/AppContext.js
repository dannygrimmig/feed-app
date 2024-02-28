import * as React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const myContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <myContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
