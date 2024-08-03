import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import HomeScreen from "../Pages/HomeScreen";
import Register from "../Auth/Register";
import Sigin from "../Auth/Sigin";
import UserDashoard from "../UserDasboard/UserDashoard";
import RegisterCard from "../Auth/RegisterCard";
import Layout2 from "../Static/Layout2";




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
    path: "/userdashboard",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: <UserDashoard />
      }
    ]
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