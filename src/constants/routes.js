import { Expenses } from "../pages/Expenses/Expenses";
import { Savings } from "../pages/Savings/Savings";

export const ROUTES = [
  {
    path: "expenses",
    element: <Expenses />,
  },
  {
    path: "savings",
    element: <Savings />,
  },
];
