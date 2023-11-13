import * as React from "react";

import { LineChart } from "@mui/x-charts";
import { DataGrid } from "@mui/x-data-grid";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import { myContext } from "../../contexts/AppContext";
import { DashboardBoxHeader } from "../DashboardBoxHeader/DashboardBoxHeader";

import {
  keyToLabel,
  colors,
  stackStrategy,
  emptyLineChartData,
} from "../../data/net";

export function NetChart({ className }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const { netData, setNetData } = React.useContext(myContext);

  const handleDeleteClick = (id) => () => {
    netData.length === 1
      ? setNetData(emptyLineChartData)
      : setNetData(netData.filter((row) => row.id !== id));
  };

  const lineColumns = [
    {
      field: "month",
      headerClassName: "font-header",
      headerName: "Month",
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "checking",
      headerName: "Checking",
      headerClassName: "font-header",
      type: "number",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "savings",
      headerName: "Savings",
      headerClassName: "font-header",
      type: "number",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "investing",
      headerName: "Investing",
      headerClassName: "font-header",
      type: "number",
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
          />,
        ];
      },
    },
  ];

  return (
    <div className={`${className}`}>
      <DashboardBoxHeader
        header="net"
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />

      {isEditing ? (
        <div style={{ height: "85%" }}>
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

          <div className="flex justify-end">
            <button
              onClick={() =>
                setNetData((netData) => [...netData, { id: netData.length }])
              }
            >
              add row
            </button>
          </div>
        </div>
      ) : (
        <LineChart
          xAxis={[
            {
              dataKey: "id",
              valueFormatter: (date) => date.toString(),
            },
          ]}
          series={Object.keys(keyToLabel).map((key) => ({
            dataKey: key,
            label: keyToLabel[key],
            color: colors[key],
            showMark: false,
            curve: "linear",
            ...stackStrategy,
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
  );
}
