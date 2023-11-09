import * as React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function App() {
  const [activeSlug, setActiveSlug] = React.useState("");
  const links = ["dashboard", "expenses", "savings"];

  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="App font-mono font-thin bg-sky-950 text-stone-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-stone-200 text-sky-800 px-8 py-4 rounded-lg mb-6 sticky top-0 z-10">
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

        <Outlet />
      </div>
    </div>
  );
}

export default App;
