import * as React from "react";
import { LineChart } from "@mui/x-charts";

export function Dashboard() {
  const boxStyles =
    "rounded-lg shadow-[5px_5px] shadow-slate-800 border border-slate-800 p-4";

  // https://mui.com/x/react-charts/lines/
  // see dataset section
  // const net = [
  //   {
  //     checking: 100,
  //     savings: 200,
  //     investing: 300,
  //     retiirement: 500,
  //     net: 1100,
  //   },
  //   {
  //     checking: 200,
  //     savings: 200,
  //     investing: 400,
  //     retiirement: 600,
  //     net: 1400,
  //   },
  // ];

  return (
    <>
      <h1 className="text-5xl mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 grid-rows-2 h-[450px] gap-4">
        <div className={`col-span-2 row-span-2 bg-sky-100 ${boxStyles}`}>
          <h1 className="text-2xl">net worth</h1>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
            series={[
              {
                curve: "linear",
                showMark: false,
                data: [
                  3500, 4000, 6000, 4500, 4000, 5000, 9000, 10000, 16000, 18000,
                  20000,
                ],
              },
            ]}
          />
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
