import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ContextProvider } from "./contexts/LineChartContext";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className={`App ${darkMode && "dark"}`}>
      <div className="Window min-h-screen font-body dark:bg-sky-950 text-stone-800 dark:text-stone-200">
        <div className="max-w-7xl mx-auto p-4">
          <ContextProvider>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Outlet />
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
