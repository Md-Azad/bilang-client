import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddTutorials = () => {
  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;

    axios
      .post("http://localhost:3000/add-tutorials", {
        name,
        email,
        image,
        language,
        price,
        review: 0,
        description,
      })
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Tutorial Has Been Saved.",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          text: err.message,
        });
      });
  };
  return (
    <section className="my-4">
      <Helmet>
        <title>BiLang || Add Tutorials</title>
      </Helmet>
      <Link to="/" className=" ml-2 md:ml-12 btn btn-info text-white">
        Back to Home
      </Link>
      <div className="w-11/12 md:w-8/12 pb-8 bg-[#F4F3F0] mx-auto rounded-lg space-y-4 ">
        <div className="text-center w-10/12 px-12 mx-auto space-y-2">
          <h1 className="text-4xl font-bold">Add New Tutorials</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 flex-col md:grid md:grid-cols-2  py-4 w-full md:w-10/12 px-2 md:px-12 md:mx-auto border-4"
        >
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text"> Name</span>
            </div>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              name="email"
              type="text"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Image</span>
            </div>
            <input
              name="image"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Language</span>
            </div>
            <input
              name="language"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              name="price"
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <input
              name="description"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <input
            className="btn bg-[#D2B48C] text-black text-2xl col-span-2 w-[96%] mt-4"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default AddTutorials;
