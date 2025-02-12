import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BookingCard from "./BookingCard";

const MyBookedTutorials = () => {
  const { user } = useAuth();

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get(`https://bilang-server.vercel.app/booking/${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(bookings);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl text-center font-bold text-green-500">
        Your booking data is here.
      </h1>

      {bookings.length ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Language</th>
                <th>Price</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <BookingCard key={booking._id} booking={booking}></BookingCard>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        //   {bookings.map((booking) => (
        //     <BookingCard key={booking._id} booking={booking}></BookingCard>
        //   ))}
        // </div>
        <h1 className="flex justify-center items-center mt-20 text-2xl text-red-900 font-bold">
          {" "}
          You have no booked tutorial yet.
        </h1>
      )}
    </div>
  );
};

export default MyBookedTutorials;
