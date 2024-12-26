const GroupCard = ({ group, offer, img }) => {
  return (
    <div className="card bg-base-100 image-full w-96 h-64 shadow-xl">
      <figure className="">
        <img className="w-full h-full object-cover" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">For group of {group} pupils</h2>
        <p className="font-semibold">
          will get flat {offer}% of each learner of the group
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-info text-white">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
