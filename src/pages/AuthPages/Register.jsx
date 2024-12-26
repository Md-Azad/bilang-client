import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUser, googleLogin } = useAuth();

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
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate("/");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration Completed.",
            showConfirmButton: false,
            timer: 1500,
          });
          updateUser({
            displayName: name,
            photoURL: photo,
          })
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message,
              });
            });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };
  return (
    <div className="hero-content flex-col bg-gray-200 my-8 rounded-lg">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-5xl font-bold italic">Register now!</h1>
        <p>With</p>
        <button
          onClick={handleGoogleRegister}
          className="flex items-center justify-center btn bg-pink-600 text-white"
        >
          <FaGoogle className="text-white text-xl" />
          Google
        </button>
        <p>Or</p>
      </div>
      <div className="card bg-base-100 w-3/4 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          {/* <p className="text-red-900 text-xl">{error}</p> */}
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
        </form>
        <p className="text-center mb-4">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-red-800">Login now!</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
