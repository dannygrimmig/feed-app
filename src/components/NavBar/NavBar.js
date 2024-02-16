import * as React from "react";
import { Link } from "react-router-dom";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ROUTES } from "../../constants/routes";

export function NavBar(props) {
  // imported
  const { darkMode, setDarkMode, activeSlug, setActiveSlug } = props;

  // styles
  const lightNavStyles = "bg-stone-200 shadow-slate-800";
  const darkNavStyles = "dark:bg-sky-900 dark:shadow-sky-800";
  const navStyles = `px-8 py-4 rounded-lg mb-6 z-10 sticky top-0 flex items-center justify-between border border-slate-800 shadow-[-5px_5px] ${lightNavStyles} ${darkNavStyles}`;

  return (
    <div className={navStyles}>
      <div>
        <h1 className="text-2xl font-header">
          <Link to={"/"}>Financial Portfolio</Link>
        </h1>

        <div className="flex space-x-4">
          {ROUTES.map(({ path }) => (
            <h3
              className={`decoration-1 underline-offset-2 ${
                path === activeSlug && "underline"
              }  hover:underline`}
              onClick={() => setActiveSlug(path)}
              key={path}
            >
              <Link to={path}>{path}</Link>
            </h3>
          ))}
        </div>
      </div>

      <div className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <LightModeIcon /> : <NightsStayIcon />}
      </div>
    </div>
  );
}
