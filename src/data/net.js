export const emptyLineChartData = [
  {
    id: 0,
  },
  // {
  //   id: 1,
  //   month: "January",
  // },
  // {
  //   id: 2,
  //   month: "February",
  // },
  // {
  //   id: 3,
  //   month: "March",
  // },
  // {
  //   id: 4,
  //   month: "April",
  // },
  // {
  //   id: 5,
  //   month: "May",
  // },
  // {
  //   id: 6,
  //   month: "June",
  // },
  // {
  //   id: 7,
  //   month: "July",
  // },
  // {
  //   id: 8,
  //   month: "August",
  // },
  // {
  //   id: 9,
  //   month: "September",
  // },
  // {
  //   id: 10,
  //   month: "October",
  // },
  // {
  //   id: 11,
  //   month: "November",
  // },
  // {
  //   id: 12,
  //   month: "December",
  // },
];

export const lineColumns = [
  {
    field: "month",
    headerClassName: "font-header",
    headerName: "Month",
    type: "string",
    editable: true,
  },
  {
    field: "checking",
    headerName: "Checking",
    headerClassName: "font-header",
    type: "number",
    align: "center",
    headerAlign: "center",
    editable: true,
  },
  {
    field: "savings",
    headerName: "Savings",
    headerClassName: "font-header",
    type: "number",
    align: "center",
    headerAlign: "center",
    editable: true,
  },
  {
    field: "investing",
    headerName: "Investing",
    headerClassName: "font-header",
    type: "number",
    align: "center",
    headerAlign: "center",
    editable: true,
  },
];

export const keyToLabel = {
  investing: "Investing",
  savings: "Savings",
  checking: "Cash",
  // net: "Net",
};

export const colors = {
  // net: "#03045e",
  checking: "#fdf0d5",
  savings: "#0a9396",
  investing: "#003049",
};

export const stackStrategy = {
  stack: "total",
  area: true,
  stackOffset: "none", // To stack 0 on top of others
};
