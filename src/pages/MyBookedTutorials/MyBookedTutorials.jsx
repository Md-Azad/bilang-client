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
      <h1 className="text-2xl md:text-3xl">your booking data is here.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking}></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookedTutorials;
