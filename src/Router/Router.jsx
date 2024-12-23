import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Services from "../Pages/Services";
import AddService from "../Pages/AddService";
import MyReview from "../Pages/MyReview";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ServiceDetails from "../components/ServiceDetails";
import MyService from "../Pages/MyService";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/add-service",
        element: (
          <PrivetRoute>
            <AddService></AddService>
          </PrivetRoute>
        ),
      },
      {
        path: "service/:id",
        element: (
          <PrivetRoute>
            <ServiceDetails></ServiceDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivetRoute>
            <MyReview></MyReview>
          </PrivetRoute>
        ),
      },
      {
        path:'/my-service',
        element:(
          <PrivetRoute>
            <MyService></MyService>
          </PrivetRoute>
        )
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
