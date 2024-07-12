import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../Components/Layout";
import Dashboard from "../Pages/Dashboard";
import AddResource from "../Pages/AddResource";
import ViewResource from "../Pages/ViewResource";
import ResourceTrack from "../Pages/ResourceTrack";
import Buffer from "../Pages/Buffer";
import LocationDetails from "../Pages/LocationDetails";
import Allocation from "../Pages/Allocation";
import JLreport from "../Pages/JLreport";
import TrackReport from "../Pages/TrackReport";
import AppReport from "../Pages/AppReport";
import CompleteReport from "../Pages/CompleteReport";
import ForcastActual from "../Pages/ForcastActual";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ForgotPassword from "../Pages/ForgotPassword";
import HomeLayout from "../Components/HomeLayout";
const Route = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout/>,
      children: [
        { path: "/", element: <SignIn /> },
        { path: "signup", element: <SignUp /> },
        { path: "password", element: <ForgotPassword /> },
      ],
    },
    {
      path: "item",
      element: <Layout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "addresource", element: <AddResource /> },
        { path: "viewresource", element: <ViewResource /> },
        { path: "resourceTrack", element: <ResourceTrack /> },
        { path: "buffer", element: <Buffer /> },
        { path: "locationDetails", element: <LocationDetails /> },
        { path: "allocationTrack", element: <Allocation /> },
        { path: "jlReport", element: <JLreport /> },
        { path: "trackReport", element: <TrackReport /> },
        { path: "appReport", element: <AppReport /> },
        { path: "completeReport", element: <CompleteReport /> },
        { path: "forecastActual", element: <ForcastActual /> },
      ],
    },
  ]);
};

export default Route;
