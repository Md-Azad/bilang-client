import axios from "axios";
import Swal from "sweetalert2";

const BookingCard = ({ booking }) => {
  const handleReview = (id) => {
    axios
      .patch("https://bilang-server.vercel.app/add-tutorials", {
        jobId: id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Oops...",
          text: err.message,
        });
      });
  };
  return (
    <div className="card bg-gray-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={booking?.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{booking?.name}</h2>
        <p>{booking?.language}</p>
        <p>${booking?.price}</p>
        <div className="card-actions">
          <button
            onClick={() => handleReview(booking.jobId)}
            className="btn btn-primary"
          >
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
