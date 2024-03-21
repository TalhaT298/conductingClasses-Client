import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import REDetails from "../pages/REDetails/REDetails";
import ProgrammingHero from "../pages/ProgrammingHero/ProgrammingHero";
import CSE from "../pages/CSE/CSE";
import ICE from "../pages/ICE/ICE";
import EEE from "../pages/EEE/EEE";
import CE from "../pages/CE/CE";
import Facilities from "../pages/Facilities/Facilities";

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
          element: <ProgrammingHero></ProgrammingHero>,
        },
        {
          path: "/cse",
          element: <CSE></CSE>,
        },
        {
          path: "/ice",
          element: <ICE></ICE>,
        },
        {
          path: "/eee",
          element: <EEE></EEE>,
        },
        {
          path: "/ce",
          element: <CE></CE>,
        },
        {
          path: "/Facilities",
          element: <Facilities></Facilities> ,
        },
      ]
    },
  ]);