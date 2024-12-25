import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BookingCard from "./BookingCard";

const MyBookedTutorials = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/booking/${user.email}`)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl text-center font-bold text-green-500">
        Your booking data is here.
      </h1>
      {bookings.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking}></BookingCard>
          ))}
        </div>
      ) : (
        <h1 className="flex justify-center items-center mt-20 text-2xl text-red-900 font-bold">
          {" "}
          You have no booked tutorial yet.
        </h1>
      )}
    </div>
  );
};

export default MyBookedTutorials;
