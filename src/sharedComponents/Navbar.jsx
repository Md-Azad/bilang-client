import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo.webp";
import { MdOutlineNightlight, MdOutlineNightlightRound } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import { Tooltip } from "react-tooltip";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut, mode, setMode } = useAuth();
  const [showDropdown, setShowDropdown] = useState(true);
  console.log(mode);

  const navLinks = (
    <>
      {" "}
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-tutorials">Add Tutorials</NavLink>
      </li>
      <li>
        <NavLink to="/find-tutors">Find Tutors</NavLink>
      </li>
      <li>
        <NavLink to="/my-tutorials">My Tutorials</NavLink>
      </li>
      <li>
        <NavLink to="/my-booked-tutorials">My Booked Tutorials</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <div className={`navbar bg-purple-300 mb-6 md:px-12  sticky top-0 z-50 `}>
        <div className="navbar-start  ">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost mr-4  lg:hidden"
              onClick={handleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {showDropdown && (
              <ul
                tabIndex={0}
                className="dropdown-content menu menu-sm bg-base-100 rounded-box z-[1] mt-3 w-52 z-60  p-2 shadow"
              >
                {navLinks}
              </ul>
            )}
          </div>
          <div>
            <Link to="/" className="flex items-center ">
              <img className="w-12 h-12 rounded-full" src={logoImg} alt="" />
              <h1 className="text-3xl font-bold text-red-900">
                Bi<span className="text-green-700">Lang</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          <button onClick={() => setMode((pre) => !pre)}>
            {mode ? (
              <MdOutlineNightlight className="text-3xl -rotate-45" />
            ) : (
              <MdOutlineNightlightRound className="text-3xl -rotate-45" />
            )}
          </button>

          {user?.email ? (
            <div className="flex gap-2 items-center">
              <Tooltip id="my-tooltip" data-tooltip-place="left" />
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                src={user?.photoURL ? user?.photoURL : "N/A"}
                className="w-10 h-10 rounded-full"
                alt=""
              />

              <button
                onClick={handleLogout}
                className="btn btn-success text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-accent text-white">
              Login
            </Link>
          )}
        </div>
      </div>
      {/* <div className={`navbar bg-purple-300 mb-6 px-24 sticky top-0 z-50 `}>
        <div className="navbar-start  ">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost border-2 border-red-400  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <Link to="/" className="md:flex items-center hidden">
              <img className="w-12 h-12 rounded-full" src={logoImg} alt="" />
              <h1 className="text-3xl font-bold text-red-900">
                Bi<span className="text-green-700">Lang</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          <button onClick={() => setMode((pre) => !pre)}>
            {mode ? (
              <MdOutlineNightlight className="text-3xl -rotate-45" />
            ) : (
              <MdOutlineNightlightRound className="text-3xl -rotate-45" />
            )}
          </button>

          {user?.email ? (
            <div className="flex gap-2 items-center">
              <Tooltip id="my-tooltip" data-tooltip-place="left" />
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                src={user?.photoURL ? user?.photoURL : "N/A"}
                className="w-10 h-10 rounded-full"
                alt=""
              />

              <button
                onClick={handleLogout}
                className="btn btn-success text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-accent text-white">
              Login
            </Link>
          )}
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
