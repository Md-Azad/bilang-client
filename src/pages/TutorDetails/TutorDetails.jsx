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
    <div className="card lg:card-side bg-gray-100 shadow-xl pl-4 h-72">
      <figure className="w-1/2 h-10/12 m-2 rounded-lg">
        <img
          className=" w-full h-full rounded-lg object-cover"
          src={details?.image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{details?.name}</h2>
        <p>Teaching Language:{details?.language}</p>
        <p>Pay Per Session: ${details?.price}</p>
        <p>Description: {details?.description}</p>
        <p>Review: {details?.review}</p>

        <div className="card-actions justify-end">
          <button onClick={handleAddBooking} className="btn btn-primary">
            Book this tutor
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
