import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import AddTutorials from "../pages/AuthPages/AddTutorials/AddTutorials";
import FindTutors from "../pages/FindTutors/FindTutors";
import Private from "./Private";
import TutorDetails from "../pages/TutorDetails/TutorDetails";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import MyBookedTutorials from "../pages/MyBookedTutorials/MyBookedTutorials";
import UpdateTutorial from "../pages/MyBookedTutorials/UpdateTutorial";
import Category from "../pages/Category/Category";
import Error from "../sharedComponents/Error";
import About from "../components/About";
import Contact from "../components/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-tutorials",
        element: (
          <Private>
            <AddTutorials></AddTutorials>
          </Private>
        ),
      },
      {
        path: "/find-tutors",
        element: <FindTutors></FindTutors>,
      },
      {
        path: "/tutor/:id",
        element: (
          <Private>
            <TutorDetails></TutorDetails>
          </Private>
        ),
      },
      {
        path: "/my-tutorials",
        element: (
          <Private>
            <MyTutorials></MyTutorials>,
          </Private>
        ),
      },
      {
        path: "/my-booked-tutorials",
        element: (
          <Private>
            {" "}
            <MyBookedTutorials></MyBookedTutorials>{" "}
          </Private>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <Private>
            <UpdateTutorial></UpdateTutorial>
          </Private>
        ),
      },
      {
        path: "/category/:category",
        element: <Category></Category>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
