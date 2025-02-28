import axios from "axios";
import { useEffect, useState } from "react";
import TutorCard from "./TutorCard";
import Search from "./Search";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTutors, setFilderedTutors] = useState([]);

  useEffect(() => {
    if (tutors.length > 0) {
      setFilderedTutors(tutors);
    }
  }, [tutors]);

  const handleMinSort = () => {
    const sortedPrice = [...tutors].sort((a, b) => a.price - b.price);
    setFilderedTutors(sortedPrice);
  };
  const handleMaxSort = () => {
    const sortedPrice = [...tutors].sort((a, b) => b.price - a.price);
    setFilderedTutors(sortedPrice);
  };

  useState(() => {
    axios
      .get("https://bilang-server.vercel.app/all-tutorials", {
        withCredentials: true,
      })
      .then((response) => {
        setTutors(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [tutors]);

  return (
    <div>
      <div className="flex justify-between mx-2">
        <div className="flex justify-end gap-4  ">
          <button onClick={handleMinSort} className="btn btn-info text-white">
            Min Price
          </button>
          <button onClick={handleMaxSort} className="btn btn-accent text-white">
            Max Price
          </button>
        </div>
        <Search setSearch={setSearch}></Search>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 ">
        {filteredTutors
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
