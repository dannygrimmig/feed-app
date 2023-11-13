import * as React from "react";
import { Link } from "react-router-dom";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

export function NavBar({ darkMode, setDarkMode }) {
  const [activeSlug, setActiveSlug] = React.useState("");
  const links = ["dashboard", "expenses", "savings"];

  const lightNavStyles = "bg-stone-200 shadow-slate-800";
  const darkNavStyles = "dark:bg-sky-900 dark:shadow-sky-800";
  const navStyles = `px-8 py-4 rounded-lg mb-6 z-10 sticky top-0 flex items-center justify-between border border-slate-800 shadow-[-5px_5px] ${lightNavStyles} ${darkNavStyles}`;

  return (
    <div className={navStyles}>
      <div>
        <h1 className="text-2xl font-header">Financial Portfolio</h1>

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

      <div className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <LightModeIcon /> : <NightsStayIcon />}
      </div>
    </div>
  );
}
