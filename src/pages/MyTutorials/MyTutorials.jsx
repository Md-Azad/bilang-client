import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyTutorials = () => {
  const { user } = useAuth();
  const [myTutorials, setMyTutorials] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/my-tutorials?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((response) => {
        setMyTutorials(response.data);
      });
  }, []);

  const handleTutorialDelete = (id) => {
    axios
      .delete(`http://localhost:3000/all-tutorials/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          const remainingTutorials = myTutorials.filter(
            (tutorial) => tutorial._id !== id
          );
          setMyTutorials(remainingTutorials);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h1 className="text-center text-2xl text-cyan-600 font-bold my-4">
        You have Total tutorials:. {myTutorials.length}
      </h1>
      <div className="overflow-x-auto border-2 border-green-700">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Language</th>
              <th>Price</th>
              <th>Review</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myTutorials.map((tutorial, index) => (
              <tr key={tutorial._id} className="text">
                <th>{index + 1}</th>
                <td>{tutorial.language}</td>
                <td>${tutorial.price} per session</td>
                <td>{tutorial.review}</td>
                <td className=" text-center">
                  <Link to={`/update/${tutorial._id}`}>
                    <button className="btn btn-info text-white mr-8">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleTutorialDelete(tutorial._id)}
                    className="btn bg-red-700 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorials;
