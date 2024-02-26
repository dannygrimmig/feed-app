import * as React from "react";
import { Link } from "react-router-dom";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ROUTES } from "../../constants/routes";
import { ShadowBox } from "../ShadowBox/ShadowBox";

export function NavBar(props) {
  // imported
  const { darkMode, setDarkMode, activeSlug, setActiveSlug } = props;

  return (
    <ShadowBox
      outerClassName="mb-6 sticky top-0 z-10 "
      innerClassName="bg-brand-25 dark:bg-brand-50"
    >
      <div className="rounded-lg flex items-center justify-between px-8 py-4">
        <div>
          <h1 className="text-2xl font-header">
            <Link to={"/"}>feed</Link>
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

        <div
          className="cursor-pointer hover:scale-125 transition"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <LightModeIcon /> : <NightsStayIcon />}
        </div>
      </div>
    </ShadowBox>
  );
}
