import { Outlet } from "react-router-dom";

function App() {
  const links = [
    {
      title: "dashboard",
      active: true,
    },
    {
      title: "checking",
      active: false,
    },
    {
      title: "saving",
      active: false,
    },
  ];

  return (
    <div className="App font-sans font-thin p-4 max-w-6xl mx-auto">
      <div className="text-gray-50 bg-slate-800 px-8 py-4 rounded-lg mb-8 sticky top-0">
        <h1 className="text-2xl font-black">Budget App</h1>
        <div className="flex space-x-4">
          {links.map((link) => (
            <h3
              className={`cursor-pointer decoration-1 underline-offset-2 ${
                link.active && "underline"
              }  hover:underline`}
            >
              {link.title}
            </h3>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
