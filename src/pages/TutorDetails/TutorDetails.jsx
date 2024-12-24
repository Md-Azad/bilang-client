import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const TutorDetails = () => {
  const param = useParams();
  const id = param.id;
  const { user } = useAuth();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/tutor/${id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  return (
    <div className="card lg:card-side bg-gray-100 shadow-xl pl-4">
      <figure>
        <img className="rounded-lg" src={details?.image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{details?.name}</h2>
        <p>Teaching Language:{details?.language}</p>
        <p>Pay Per Session: ${details?.price}</p>
        <p>Description: {details?.description}</p>
        <p>Review: {details?.review}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book this tutor</button>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
