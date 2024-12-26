import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";
import useAuth from "../hooks/useAuth";

const RootLayout = () => {
  const { mode } = useAuth();
  return (
    <div className={`${mode ? "bg-gray-200" : ""}`}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
