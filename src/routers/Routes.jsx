import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import AddTutorials from "../pages/AuthPages/AddTutorials/AddTutorials";
import FindTutors from "../pages/FindTutors/FindTutors";
import Private from "./Private";
import TutorDetails from "../pages/TutorDetails/TutorDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
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
        element: <TutorDetails></TutorDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
