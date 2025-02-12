import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TutorCard from "../FindTutors/TutorCard";

const Category = () => {
  const category = useParams();
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    axios
      .get(`https://bilang-server.vercel.app/category/${category.category}`)
      .then((res) => {
        setTutors(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [category.category]);

  return (
    <div>
      <h1 className="text-3xl text-center text-green-700 font-bold">
        Talk to the best tutors for {category.category}
      </h1>
      {tutors.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 ">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
          ))}
        </div>
      ) : (
        <h1 className="text-center mt-12 font-bold text-2xl text-red-700">
          {" "}
          No tutor found for this language
        </h1>
      )}
      {tutors.length > 0 && (
        <div className="text-center my-4">
          <button className="btn btn-outline bg-green-900 text-white font-bold">
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Category;
