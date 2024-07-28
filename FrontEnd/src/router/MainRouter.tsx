import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import HomeScreen from "../Pages/HomeScreen";
import Register from "../Auth/Register";
import Sigin from "../Auth/Sigin";




export const mainApp = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },

  {
    path: "/Register",
    element: <Register />,
  },

  {
    path: "/sigin",
    element: <Sigin />,
  },
]);