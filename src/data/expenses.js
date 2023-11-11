export const defaultPieData = [
  { id: 0, label: "investing" },
  { id: 1, label: "saving" },
  { id: 2, label: "spending" },
  { id: 3, label: "rent" },
  { id: 4, label: "grocery" },
];

export const pieColumns = [
  {
    field: "label",
    headerName: "Category",
    headerClassName: "font-header",
    editable: false,
  },
  {
    field: "value",
    headerName: "Percent",
    headerClassName: "font-header",
    editable: true,
    type: "number",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "color",
    headerName: "Color",
    headerClassName: "font-header",
    editable: true,
    type: "string",
    align: "center",
    headerAlign: "center",
  },
];
