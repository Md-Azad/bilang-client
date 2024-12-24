import axios from "axios";
import { useState } from "react";
import TutorCard from "./TutorCard";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  useState(() => {
    axios
      .get("http://localhost:3000/all-tutorials")
      .then((response) => {
        setTutors(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(tutors);
  return (
    <div>
      <h1 className="text-3xl text-center">Find Your Tutor Here.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 ">
        {tutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
        ))}
      </div>
      <div className="text-center my-4">
        <button className="btn btn-outline bg-green-900 text-white font-bold">
          Load more
        </button>
      </div>
    </div>
  );
};

export default FindTutors;
