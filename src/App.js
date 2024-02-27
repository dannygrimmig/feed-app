import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { myContext } from "./contexts/AppContext";
import { Home } from "./pages/Home/Home";

function App() {
  const [onHomePage, setOnHomePage] = React.useState(false);
  const [activeSlug, setActiveSlug] = React.useState("");
  const { darkMode, setDarkMode } = React.useContext(myContext);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setOnHomePage(pathname === "/");
    setActiveSlug(pathname.replace("/", ""));

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className={`App ${darkMode && "dark"} font-light`}>
      <div className="Window min-h-screen font-body dark:bg-brand-75 text-stone-800 dark:text-stone-200">
        <div className="max-w-7xl mx-auto p-4">
          <NavBar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            activeSlug={activeSlug}
            setActiveSlug={setActiveSlug}
          />

          {onHomePage && <Home />}

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
