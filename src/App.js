import * as React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [activeSlug, setActiveSlug] = React.useState("");
  const links = ["dashboard", "expenses", "savings"];

  return (
    <div className="App font-sans font-thin p-4 max-w-6xl mx-auto">
      <div className="text-slate-50 bg-sky-800 px-8 py-4 rounded-lg mb-8 sticky top-0">
        <h1 className="text-2xl font-black">Budget App</h1>
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
  );
}

export default App;
