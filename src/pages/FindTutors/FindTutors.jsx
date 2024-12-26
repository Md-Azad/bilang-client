import axios from "axios";
import { useState } from "react";
import TutorCard from "./TutorCard";
import Search from "./Search";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");

  useState(() => {
    axios
      .get("http://localhost:3000/all-tutorials", { withCredentials: true })
      .then((response) => {
        setTutors(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [tutors]);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl text-center text-green-600">
          Find Your Tutor Here
        </h1>
        <Search setSearch={setSearch}></Search>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 ">
        {tutors
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.language.toLowerCase().includes(search);
          })
          .map((tutor) => (
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
