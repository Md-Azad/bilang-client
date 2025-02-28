import useAuth from "../../hooks/useAuth";

const Guarantee = () => {
  const { mode } = useAuth();
  return (
    <div
      className={`h-56 ${
        mode ? "bg-gray-600" : "bg-cyan-600"
      }  text-center md:flex md:flex-col justify-center items-center my-8 rounded-lg mx-2 md:mx-0`}
    >
      <h1 className="text-xl md:text-4xl text-white font-bold pt-4 md:pt-0">
        100% Money Back Guarantee On Unsatisfaction After Three Classes.
      </h1>
      <p className="text-xl mt-4 font-bold text-white">
        You will get full money back after three classes without asking any
        reason if you are not satisfied!{" "}
      </p>
    </div>
  );
};

export default Guarantee;
