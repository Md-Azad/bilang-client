import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logIn, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleRegister = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handlelogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        if (result.user) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex flex-col  items-center min-h-screen mt-8 bg-base-300">
      <Helmet>
        <title>BiLang || Login</title>
      </Helmet>
      <h1 className="py-8 text-5xl text-green-800 font-bold">Login Here</h1>
      <button
        onClick={handleGoogleRegister}
        className=" btn btn-info text-white font-bold"
      >
        <p className="p-2 bg-black rounded-full">
          <FaGoogle />
        </p>
        With Google
      </button>
      <div className="divider w-2/5 mx-auto">OR</div>

      <div className="card bg-base-100 md:w-1/2 shadow-2xl my-2">
        <form onSubmit={handlelogIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              placeholder="password"
              className="input input-bordered  relative"
              required
            />
            {showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(false)}
                className="absolute text-2xl right-12 bottom-[12.25rem]"
              />
            ) : (
              <IoEyeSharp
                onClick={() => setShowPassword(true)}
                className="absolute text-2xl right-12 bottom-[12.25rem]"
              />
            )}
            <label className="label">
              <Link
                to="/auth/forgetpassword"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <p className="text-center mb-4">
          Do not have an account?{" "}
          <Link to="/register">
            <span className="text-red-800">register now!</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
