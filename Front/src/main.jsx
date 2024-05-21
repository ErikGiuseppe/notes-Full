import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./router/Home.jsx";
import CardPage from "./router/CardPage.jsx";
import ContactDetails from "./router/ContactDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/card/:type',
    element:<CardPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
