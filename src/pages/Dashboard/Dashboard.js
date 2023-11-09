import * as React from "react";
import { LineChart, PieChart, BarChart } from "@mui/x-charts";

export function Dashboard() {
  const boxStyles =
    "rounded-lg shadow-[5px_5px] shadow-slate-800 border border-slate-800 p-4";

  const annualNet = [
    {
      month: 1,
      net: 5000,
      checking: 2000,
      savings: 1000,
      investing: 2000,
    },
    {
      month: 2,
      net: 8000,
      checking: 3000,
      savings: 2000,
      investing: 3000,
    },
    {
      month: 3,
      net: 8000,
      checking: 3000,
      savings: 2500,
      investing: 2500,
    },
    {
      month: 4,
      net: 8500,
      checking: 3500,
      savings: 2000,
      investing: 2500,
    },
    {
      month: 5,
      net: 9000,
      checking: 4000,
      savings: 2000,
      investing: 2500,
    },
    {
      month: 6,
      net: 9500,
      checking: 4500,
      savings: 2000,
      investing: 2500,
    },
    {
      month: 7,
      net: 11000,
      checking: 4500,
      savings: 2500,
      investing: 3500,
    },
    {
      month: 8,
      net: 12000,
      checking: 5000,
      savings: 3000,
      investing: 3500,
    },
    {
      month: 9,
      net: 13500,
      checking: 5500,
      savings: 3500,
      investing: 4000,
    },
    {
      month: 10,
      net: 14000,
      checking: 6000,
      savings: 3500,
      investing: 4000,
    },
    {
      month: 11,
      net: 13000,
      checking: 5000,
      savings: 3500,
      investing: 4000,
    },
    {
      month: 12,
      net: 15000,
      checking: 5000,
      savings: 4000,
      investing: 5500,
    },
  ];

  const keyToLabel = {
    investing: "Investing",
    savings: "Savings",
    checking: "Cash",
    net: "Net",
  };

  const colors = {
    net: "#4e79a7",
    checking: "darkgreen",
    savings: "orange",
    investing: "lightgreen",
  };

  return (
    <>
      {/* <h1 className="text-5xl mb-4">Dashboard</h1> */}
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-2 h-[1000px] md:h-[550px] gap-4">
        <div className={`md:col-span-2 md:row-span-2 bg-sky-100 ${boxStyles}`}>
          <h1 className="text-2xl">net</h1>
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
                  fontFamily: "monospace",
                  fontSize: "12px",
                },
              },
            }}
          />
        </div>

        <div className={`bg-sky-300 ${boxStyles}`}>
          <h1 className="text-2xl">expenses</h1>

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
            slotProps={{ legend: { hidden: true } }}
          />
        </div>

        <div className={`bg-sky-800 ${boxStyles}`}>
          <h1 className="text-2xl">budget</h1>
          <BarChart
            xAxis={[
              { scaleType: "band", data: ["group A", "group B", "group C"] },
            ]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] },
            ]}
          />
        </div>
      </div>
    </>
  );
}
