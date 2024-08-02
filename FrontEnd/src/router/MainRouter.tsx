import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import HomeScreen from "../Pages/HomeScreen";
import Register from "../Auth/Register";
import Sigin from "../Auth/Sigin";
import UserDashoard from "../UserDasboard/UserDashoard";
import RegisterCard from "../Auth/RegisterCard";




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
    path: "/signin",
    element: <Sigin />,
  },

  {
    path: "/userdashboard",
    element: <UserDashoard />,
  },

  {
    path: "/registercard",
    element: <RegisterCard />,
  },
]);