import * as React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [activeSlug, setActiveSlug] = React.useState("");
  const links = ["dashboard", "expenses", "savings"];

  return (
    <div className="App font-mono font-thin p-4 max-w-6xl mx-auto">
      <div className="text-slate-800 bg-sky-200 px-8 py-4 rounded-lg mb-6 sticky top-0 shadow-[5px_5px] shadow-slate-800 border border-slate-800 z-10">
        <h1 className="text-2xl font-black">Financial Portfolio</h1>
        <div className="flex space-x-4">
          {links.map((link) => (
            <h3
              className={`text-slate-600 decoration-1 underline-offset-2 ${
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
  );
}

export default App;
