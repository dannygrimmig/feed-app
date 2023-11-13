import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Expenses } from "./pages/Expenses/Expenses";
import { Savings } from "./pages/Savings/Savings";
import { ContextProvider } from "./contexts/AppContext";

const AppWrapper = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
      {
        path: "savings",
        element: <Savings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
