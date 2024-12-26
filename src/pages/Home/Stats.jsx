import { IoIosStar } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
const Stats = () => {
  const { mode } = useAuth();
  return (
    <div
      className={`stats stats-vertical lg:stats-horizontal shadow w-full my-4 shadow-black ${
        mode ? "bg-gray-200" : ""
      } `}
    >
      <div className="stat">
        <div className="stat-value">32,000+</div>
        <div className="stat-desc">Experience tutors</div>
      </div>

      <div className="stat">
        <div className="stat-value">30,000+</div>
        <div className="stat-desc">5-Star tutor reviews</div>
      </div>
      <div className="stat">
        <div className="stat-value">120</div>
        <div className="stat-desc">Subjects taught</div>
      </div>

      <div className="stat">
        <div className="stat-value">180+</div>
        <div className="stat-desc">Tutor Nationalities</div>
      </div>
      <div className="stat">
        <div className="stat-value flex items-center">
          4.8 <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className="stat-desc text-center">on the App Store</div>
      </div>
    </div>
  );
};

export default Stats;
