import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserName from "./components/username";
import Register from "./components/register";
import Password from "./components/password";
import Profile from "./components/profile";
import Recovery from "./components/recovery";
import Reset from "./components/reset";
import PageNotFound from "./components/pagenotfound";

// root routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserName />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;
