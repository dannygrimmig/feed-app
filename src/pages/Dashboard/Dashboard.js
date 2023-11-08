import * as React from "react";

export function Dashboard() {
  const boxStyles =
    "rounded-lg shadow-[5px_5px] shadow-slate-800 border border-slate-800 p-4";
  return (
    <>
      <h1 className="text-5xl mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 grid-rows-2 h-[450px] gap-4">
        <div className={`col-span-2 row-span-2 bg-sky-100 ${boxStyles}`}>
          <h1 className="text-2xl">net worth</h1>
        </div>

        <div className={`flex-1 bg-sky-300 ${boxStyles}`}>
          <h1 className="text-2xl">expenses</h1>
        </div>

        <div className={`flex-1 bg-sky-800 ${boxStyles}`}>
          <h1 className="text-2xl">savings</h1>
        </div>
      </div>
    </>
  );
}
