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
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar hidden md:inline-block">
            <div className="mask mask-squircle h-12 w-12">
              <img src={booking?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{booking?.name}</div>
          </div>
        </div>
      </td>
      <td>
        {booking?.language}
        <br />
      </td>
      <td>${booking?.price}</td>
      <th>
        <button
          onClick={() => handleReview(booking.jobId)}
          className="btn bg-cyan-600 text-white"
        >
          Review
        </button>
      </th>
    </tr>
  );
};

export default BookingCard;
