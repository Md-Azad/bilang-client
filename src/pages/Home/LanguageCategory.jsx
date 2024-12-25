import { useEffect, useState } from "react";
import logoImg from "../../assets/logo.webp";
import axios from "axios";
import { Link } from "react-router-dom";
const LanguageCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <section className="mx-2 grid md:grid-cols-3 gap-4 ">
      {categories.map((category) => (
        <Link key={category._id} to={`/category/${category.category}`}>
          <div className="flex gap-4 justify-between items-center border-2 border-gray-400 pr-4 rounded-md">
            <div className="flex gap-4 items-center pl-4 py-4">
              <img className="w-8 h-8 rounded-md" src={logoImg} alt="" />
              <h1 className="text-3xl text-gray-500 font-bold">
                {category.category} Tutors
              </h1>
            </div>
            <p> &gt; </p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default LanguageCategory;
