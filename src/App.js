import * as React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

function App() {
  const [activeSlug, setActiveSlug] = React.useState("");
  const [darkMode, setDarkMode] = React.useState(false);
  const links = ["dashboard", "expenses", "savings"];

  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className={`App ${darkMode && "dark"}`}>
      <div className="Window min-h-screen font-mono font-thin text-stone-100 dark:bg-sky-950">
        <div className="max-w-7xl mx-auto p-4">
          <div className="bg-stone-200 dark:bg-sky-900 text-sky-800 dark:text-stone-200 px-8 py-4 rounded-lg mb-6 sticky top-0 z-10 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black">Financial Portfolio</h1>

              <div className="flex space-x-4">
                {links.map((link) => (
                  <h3
                    className={`decoration-1 underline-offset-2 ${
                      link === activeSlug && "underline"
                    }  hover:underline`}
                    onClick={() => setActiveSlug(link)}
                  >
                    <Link to={link}>{link}</Link>
                  </h3>
                ))}
              </div>
            </div>

            <div
              className="cursor-pointer"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <LightModeIcon /> : <NightsStayIcon />}
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
