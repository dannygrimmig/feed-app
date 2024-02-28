import * as React from "react";
import { Link } from "react-router-dom";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ShadowBox } from "../ShadowBox/ShadowBox";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { UseAuth } from "../../contexts/AuthContext";

export function NavBar(props) {
  // imported
  const { routes, darkMode, setDarkMode, activeSlug, setActiveSlug } = props;
  const { logOut } = UseAuth();

  async function handleLogOut() {
    try {
      await logOut();
    } catch {
      console.log("failed to logout");
    }
  }

  return (
    <ShadowBox
      outerClassName="mb-6 sticky top-0 z-10 "
      innerClassName="bg-slate-200 dark:bg-brand-50"
    >
      <div className="rounded-lg flex items-center justify-between px-8 py-4">
        <div>
          <h1 className="text-2xl font-header">
            <Link to={"/"} className="flex gap-2 items-center w-max">
              <LocalDiningIcon /> feed
            </Link>
          </h1>

          <div className="flex space-x-4">
            {routes.map(({ path }) => (
              <h3
                className={`decoration-1 underline-offset-2 font-light ${
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

        <div className="flex gap-2 items-center">
          <div
            className="cursor-pointer hover:scale-125 transition"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <LightModeIcon /> : <NightsStayIcon />}
          </div>
          <button onClick={() => handleLogOut()}>log out</button>
        </div>
      </div>
    </ShadowBox>
  );
}
