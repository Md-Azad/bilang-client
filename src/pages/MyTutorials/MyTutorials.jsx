import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyTutorials = () => {
  const { user } = useAuth();
  const [myTutorials, setMyTutorials] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/my-tutorials?email=${user?.email}`)
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

  const handleUpdateTutorial = (id) => {
    console.log("updateing", id);
  };
  return (
    <div>
      <h1>My tutorials here. {myTutorials.length}</h1>
      <div className="overflow-x-auto border-2 border-green-700">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Language</th>
              <th>Price</th>
              <th>Trainer Name</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myTutorials.map((tutorial, index) => (
              <tr key={tutorial._id} className="text">
                <th>{index + 1}</th>
                <td>{tutorial.language}</td>
                <td>${tutorial.price} per session</td>
                <td>{tutorial.name}</td>
                <td className=" text-center">
                  <button className="btn btn-info text-white mr-8">
                    Update
                  </button>
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
