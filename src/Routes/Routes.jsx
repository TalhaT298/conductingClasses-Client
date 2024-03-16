import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import REDetails from "../pages/REDetails/REDetails";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "/cricket",
          element: <REDetails></REDetails>,
        },
        {
          path: "/programming-hero",
          element: <REDetails></REDetails>,
        },
      ]
    },
  ]);