import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import useAuth from "../../hooks/useAuth";

const TutorDetails = () => {
  const param = useParams();
  const id = param.id;
  //   const { user } = useAuth();

  const [details, setDetails] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://bilang-server.vercel.app/tutor/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setDetails(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  const handleAddBooking = () => {
    axios
      .post("https://bilang-server.vercel.app/booking", {
        jobId: details._id,
        email: user?.email,
        name: details.name,
        image: details.image,
        language: details.language,
        price: details.price,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex flex-row items-center bg-gray-100 h-[70vh] shadow-xl pl-4">
      <div className=" w-1/2   flex items-center justify-center  ">
        <div className="h-4/5 w-3/4 space-y-2  ">
          <h2 className=" font-bold text-xl  text-cyan-600 uppercase">
            {details?.name}
          </h2>
          <p className=" font-semibold text-xl  text-cyan-600">
            Teaching Language:{details?.language}
          </p>
          <p className=" font-semibold text-xl  text-cyan-600">
            Pay Per Session: ${details?.price}
          </p>
          <p className=" font-semibold text-xl  text-cyan-600">
            Reviews: {details?.review}
          </p>
          <p className=" text-cyan-600"> {details?.description}</p>

          <div className=" text-center">
            <button
              onClick={handleAddBooking}
              className="btn bg-cyan-600 w-full text-white hover:bg-cyan-400"
            >
              Book this tutor
            </button>
          </div>
        </div>
      </div>
      <figure className="w-1/2 h-full p-4 m-2 rounded-lg">
        <img
          className=" w-full h-full rounded-lg object-fit"
          src={details?.image}
          alt="Album"
        />
      </figure>
    </div>
  );
};

export default TutorDetails;
