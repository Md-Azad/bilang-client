import { FaStar } from "react-icons/fa";
import { TbLanguage } from "react-icons/tb";
import { Link } from "react-router-dom";
const TutorCard = ({ tutor }) => {
  return (
    <div className="border-4  p-4 bg-gray-100">
      <div className="flex gap-4 h-full">
        <div className="w-1/3 h-full ">
          <img
            src={tutor?.image}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-2/3 relative">
          <h1 className="text-xl font-bold text-cyan-700">{tutor?.name}</h1>
          <h2 className="flex items-center gap-2 text-cyan-600 font-bold">
            <TbLanguage /> <span>{tutor?.language}</span>
          </h2>
          <p className="text-xl font-bold text-cyan-700">50 minutes sesstion</p>
          <h2 className="text-xl font-bold text-cyan-700">
            ${tutor?.price} (USD)
          </h2>
          <p className=" font-bold text-cyan-700">{tutor?.description}</p>
          <Link to={`/tutor/${tutor?._id}`}>
            <button className="btn w-full bg-cyan-600 text-white uppercase  absolute bottom-0 hover:bg-cyan-500">
              See Details
            </button>
          </Link>
          <p className="flex absolute top-0 right-2 items-center gap-2">
            <FaStar className="text-2xl text-orange-400" />{" "}
            <span className="text-cyan-600">{tutor?.review} reviews</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
