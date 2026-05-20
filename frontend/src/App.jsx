import React from "react";

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Stocks from "./pages/Stocks";
import Portfolio from "./pages/Portfolio";
import AIInsights from "./pages/AIInsights";
import Predictions from "./pages/Predictions";
import ProtectedRoute
from "./components/ProtectedRoute";
import Watchlist
from "./pages/Watchlist";
import News
from "./pages/News";
import Profile
from "./pages/Profile";


function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },

    {
  path: "/dashboard",

  element:

  <ProtectedRoute>

    <Dashboard />

  </ProtectedRoute>,
},

    {
  path: "/stocks",

  element:

  <ProtectedRoute>

    <Stocks />

  </ProtectedRoute>,
},

   {
  path: "/portfolio",

  element:

  <ProtectedRoute>

    <Portfolio />

  </ProtectedRoute>,
},

    {
  path: "/ai-insights",

  element:

  <ProtectedRoute>

    <AIInsights />

  </ProtectedRoute>
},

    {
  path: "/predictions",

  element:

  <ProtectedRoute>

    <Predictions />

  </ProtectedRoute>
},
{
  path: "/watchlist",

  element:

  <ProtectedRoute>

    <Watchlist />

  </ProtectedRoute>,
},
{
  path: "/news",

  element:

  <ProtectedRoute>

    <News />

  </ProtectedRoute>,
},
{
  path: "/profile",

  element:

  <ProtectedRoute>

    <Profile />

  </ProtectedRoute>,
},

  ]);

  return (
    <RouterProvider router={router} />
  );

}

export default App;