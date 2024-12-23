import { MdCastForEducation } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TbLanguage } from "react-icons/tb";
const TutorCard = ({ tutor }) => {
  return (
    <div className="border-4 border-red-800 p-4">
      <div className="grid grid-cols-3">
        <img className="w-11/12 h-32" src={tutor?.image} alt="" />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{tutor?.name}</h1>
          <p className="flex items-center gap-2 text-xl font-bold">
            <MdCastForEducation />
            {tutor?.language}
          </p>
          <p className="font-bold">Speaks: {tutor?.language} (Native)</p>
        </div>
        <div className="flex justify-evenly  ">
          <div className="flex flex-col w-1/2">
            <div className="grid grid-cols-2 items-center ">
              <h1>
                <FaStar className="text-red-900 text-4xl" />
              </h1>
              <p className="text-4xl  ">{tutor?.review}</p>
            </div>
            <p className="ml-2 text-gray-400">{tutor?.review} reviews</p>
          </div>

          <div className="">
            <p className=" font-bold">USD: ${tutor?.price} </p>
            <p className="text-gray-400 text-sm">50 min session</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="w-1/3 "></div>
        <div className="flex justify-between items-center">
          <h1 className=" font-bold">{tutor?.description}</h1>
          <button className="btn bg-pink-500 border-2 border-black">
            Book trial lesstion
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
