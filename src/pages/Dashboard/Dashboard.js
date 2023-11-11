import * as React from "react";
import { LineChart, PieChart, BarChart } from "@mui/x-charts";
import { DataGrid } from "@mui/x-data-grid";

import { myContext } from "../../contexts/LineChartContext";

import { lineColumns, keyToLabel, colors } from "../../data/net";
import { pieColumns } from "../../data/expenses";

export function Dashboard() {
  const lightBoxStyles = "from-sky-200 to-sky-300 shadow-slate-800";
  const darkBoxStyles = "dark:from-sky-700 dark:to-sky-800 dark:shadow-sky-600";
  const boxStyles = `rounded-lg p-4 border border-slate-800 bg-gradient-to-r shadow-[-5px_5px] hover:shadow-[-8px_8px] hover:-mr-1 hover:-mt-1 ${lightBoxStyles} ${darkBoxStyles} `;

  const [populatingLineData, setPopulatingLineData] = React.useState(false);
  const [populatingPieData, setPopulatingPieData] = React.useState(false);
  const [populatingBarData, setPopulatingBarData] = React.useState(false);

  const { netData, setNetData } = React.useContext(myContext);
  const { pieData, setPieData } = React.useContext(myContext);

  return (
    <>
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-2 h-[1000px] md:h-[550px] gap-4">
        <div className={`md:col-span-2 md:row-span-2 ${boxStyles}`}>
          <h1
            onClick={() => setPopulatingLineData(!populatingLineData)}
            className="text-2xl font-header cursor-pointer w-max"
          >
            net
          </h1>

          {populatingLineData ? (
            <div style={{ height: "90%" }}>
              <DataGrid
                editMode="row"
                rows={netData}
                columns={lineColumns}
                getRowClassName={(params) => "font-body"}
                processRowUpdate={(updatedRow, originalRow) => {
                  const updatedLineChartDataState = netData.map((currRow) => {
                    if (currRow === originalRow) {
                      return {
                        ...updatedRow,
                        net:
                          updatedRow.checking +
                          updatedRow.savings +
                          updatedRow.investing,
                      };
                    } else {
                      return currRow;
                    }
                  });
                  setNetData(updatedLineChartDataState);
                }}
              />
            </div>
          ) : (
            <LineChart
              xAxis={[
                {
                  dataKey: "id",
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
              dataset={netData}
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
          )}
        </div>

        <div className={`${boxStyles}`}>
          <h1
            onClick={() => setPopulatingPieData(!populatingPieData)}
            className="text-2xl font-header cursor-pointer w-max"
          >
            expenses
          </h1>

          {populatingPieData ? (
            <div style={{ height: "90%" }}>
              <DataGrid
                editMode="row"
                rows={pieData}
                columns={pieColumns}
                getRowClassName={(params) => "font-body"}
                processRowUpdate={(updatedRow, originalRow) => {
                  const updatedPieChartData = pieData.map((currRow) => {
                    if (currRow === originalRow) {
                      return {
                        ...updatedRow,
                      };
                    } else {
                      return currRow;
                    }
                  });
                  setPieData(updatedPieChartData);
                }}
              />
            </div>
          ) : (
            <PieChart
              series={[
                {
                  data: pieData,
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
          )}
        </div>

        <div className={`${boxStyles}`}>
          <h1
            onClick={() => setPopulatingBarData(!populatingBarData)}
            className="text-2xl font-header cursor-pointer w-max"
          >
            budget
          </h1>

          {populatingBarData ? (
            <div>fill in data for bar chart</div>
          ) : (
            <BarChart
              xAxis={[{ scaleType: "band", data: ["Petal", "Bilt", "Amex"] }]}
              series={[{ data: [200, 300, 400] }, { data: [250, 600, 410] }]}
            />
          )}
        </div>
      </div>
    </>
  );
}
