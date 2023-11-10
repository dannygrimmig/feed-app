import * as React from "react";
import { LineChart, PieChart, BarChart } from "@mui/x-charts";
import { annualNet, keyToLabel, colors } from "../../data/net";

export function Dashboard() {
  const lightBoxStyles = "from-sky-200 to-sky-300 shadow-slate-800";
  const darkBoxStyles = "dark:from-sky-700 dark:to-sky-800 dark:shadow-sky-600";
  const boxStyles = `rounded-lg p-4 cursor-pointer border border-slate-800 bg-gradient-to-r shadow-[-5px_5px] hover:shadow-[-8px_8px] hover:-mr-1 hover:-mt-1 ${lightBoxStyles} ${darkBoxStyles} `;

  return (
    <>
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-2 h-[1000px] md:h-[550px] gap-4">
        <div className={`md:col-span-2 md:row-span-2 ${boxStyles}`}>
          <h1 className="text-2xl font-header">net</h1>

          <LineChart
            xAxis={[
              {
                dataKey: "month",
                valueFormatter: (v) => v.toString(),
              },
            ]}
            series={Object.keys(keyToLabel).map((key) => ({
              dataKey: key,
              label: keyToLabel[key],
              color: colors[key],
              showMark: false,
              curve: "linear",
            }))}
            dataset={annualNet}
            sx={{
              ".MuiLineElement-root, .MuiMarkElement-root": {
                strokeWidth: 3,
              },
            }}
            slotProps={{
              legend: {
                labelStyle: {
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "14px",
                },
              },
            }}
          />
        </div>

        <div className={`${boxStyles}`}>
          <h1 className="text-2xl font-header">expenses</h1>

          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 30, label: "investing", color: "darkgreen" },
                  { id: 1, value: 10, label: "saving", color: "lightgreen" },
                  { id: 2, value: 20, label: "spending", color: "navy" },
                  { id: 3, value: 30, label: "rent", color: "red" },
                  { id: 4, value: 10, label: "grocery", color: "pink" },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
              },
            ]}
            slotProps={{
              legend: {
                labelStyle: {
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "14px",
                },
              },
            }}
          />
        </div>

        <div className={`${boxStyles}`}>
          <h1 className="text-2xl font-header">budget</h1>
          <BarChart
            xAxis={[{ scaleType: "band", data: ["Petal", "Bilt", "Amex"] }]}
            series={[{ data: [200, 300, 400] }, { data: [250, 600, 410] }]}
          />
        </div>
      </div>
    </>
  );
}
