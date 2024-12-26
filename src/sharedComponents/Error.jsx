import { TbError404 } from "react-icons/tb";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <TbError404 className="text-[20rem] text-red-900" />
      <h1 className="text-2xl text-red-600">
        Your desired page did not Found.
      </h1>
    </div>
  );
};

export default Error;
