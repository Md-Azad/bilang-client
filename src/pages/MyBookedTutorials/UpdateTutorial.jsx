import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateTutorial = () => {
  const { user } = useAuth();
  const id = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/tutor/${id?.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id?.id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const selectElement = form.elements.selectName;
    const language = selectElement.options[selectElement.selectedIndex].text;
    const price = form.price.value;
    const description = form.des.value;

    axios
      .put(`http://localhost:3000/update/${id?.id}`, {
        image,
        language,
        price,
        description,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your tutorial has been updated",
            showConfirmButton: false,
            timer: 1500,
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
    <section className="my-4">
      <Helmet>
        <title>BiLang || Update Tutorials</title>
      </Helmet>
      <Link to="/" className=" ml-2 md:ml-12 btn btn-info text-white">
        Back to Home
      </Link>
      <div className="w-11/12 md:w-8/12 pb-8 bg-[#F4F3F0] mx-auto rounded-lg space-y-4 ">
        <div className="text-center w-10/12 px-12 mx-auto space-y-2">
          <h1 className="text-4xl font-bold">Update Tutorial</h1>
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
              required
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Language</span>
            </div>
            <select name="selectName">
              <option value="0">{data?.language}</option>
              <option value="1">English</option>
              <option value="2">German</option>
              <option value="3">Arabic</option>
              <option value="4">Spanish</option>
              <option value="5">Italian</option>
              <option value="6">Japanese</option>
              <option value="7">French</option>
              <option value="8">Chinese</option>
              <option value="9">Protuguese</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              name="price"
              type="number"
              placeholder="Type here"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <input
              name="des"
              type="text"
              placeholder="Type here"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Review</span>
            </div>
            <input
              name="description"
              type="text"
              defaultValue={data?.review}
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <input
            className="btn bg-[#D2B48C] text-black text-2xl col-span-2 w-[96%] mt-4"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </section>
  );
};

export default UpdateTutorial;
