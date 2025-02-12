import { IoIosStar } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
const Stats = () => {
  const { mode } = useAuth();

  const [stats, setStates] = useState([]);
  useEffect(() => {
    axios
      .get("https://bilang-server.vercel.app/stats")
      .then((res) => {
        setStates(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(stats.totalTutors);
  return (
    <div
      className={`stats stats-vertical lg:stats-horizontal shadow w-full my-4 shadow-black ${
        mode ? "bg-gray-600 text-white" : ""
      } `}
    >
      <div className={`${mode && "text-white"} stat`}>
        <div className={`stat-value ${mode && "text-white"}`}>
          {stats?.totalTutors}
        </div>
        <div className={`stat-desc ${mode && "text-white"}`}>
          Experience tutors
        </div>
      </div>

      <div className="stat">
        <div className="stat-value">{stats?.totalReviews}</div>
        <div className={`stat-desc ${mode && "text-white"}`}>
          5-Star tutor reviews
        </div>
      </div>
      <div className="stat">
        <div className="stat-value">{stats?.totalLanguages}</div>
        <div className={`stat-desc ${mode && "text-white"}`}>
          Subjects taught
        </div>
      </div>

      <div className="stat">
        <div className="stat-value flex items-center">
          4.8 <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className={`stat-desc ${mode && "text-white"}`}>
          on the App Store
        </div>
      </div>
    </div>
  );
};

export default Stats;
